interface Env {
  ADMIN_PASSWORD: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
}

async function getFileSha(env: Env, path: string): Promise<string | null> {
  const res = await fetch(
    `https://api.github.com/repos/${env.GITHUB_REPO}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "krebs-hausmeisterservice",
      },
    }
  );

  if (!res.ok) return null;
  const data = (await res.json()) as { sha: string };
  return data.sha;
}

async function uploadToGitHub(
  env: Env,
  path: string,
  base64Content: string,
  message: string
) {
  const sha = await getFileSha(env, path);

  const body: Record<string, string> = {
    message,
    content: base64Content,
  };
  if (sha) body.sha = sha;

  const res = await fetch(
    `https://api.github.com/repos/${env.GITHUB_REPO}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "krebs-hausmeisterservice",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`GitHub upload failed: ${res.status} ${error}`);
  }

  return res.json();
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const formData = await request.formData();
    const password = formData.get("password") as string;
    const file = formData.get("file") as File;
    const imageName = formData.get("imageName") as string;

    if (!password || password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Nicht autorisiert" }), {
        status: 401,
        headers,
      });
    }

    if (!file || !imageName) {
      return new Response(
        JSON.stringify({ error: "Datei und Bildname erforderlich" }),
        { status: 400, headers }
      );
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return new Response(
        JSON.stringify({ error: "Datei zu groß (max. 5 MB)" }),
        { status: 400, headers }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64 = btoa(binary);

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `public/images/${imageName}.${ext}`;

    await uploadToGitHub(
      env,
      path,
      base64,
      `Bild aktualisiert: ${imageName}`
    );

    return new Response(
      JSON.stringify({
        success: true,
        path: `/images/${imageName}.${ext}`,
        message: "Bild hochgeladen. Die Seite wird in 1-2 Minuten aktualisiert.",
      }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Upload fehlgeschlagen: " + (err as Error).message,
      }),
      { status: 500, headers }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
