interface Env {
  ADMIN_PASSWORD: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
}

const CONTENT_PATH = "content/site-content.json";

async function getGitHubFile(env: Env) {
  const res = await fetch(
    `https://api.github.com/repos/${env.GITHUB_REPO}/contents/${CONTENT_PATH}`,
    {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "krebs-hausmeisterservice",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = (await res.json()) as { content: string; sha: string };
  const decoded = atob(data.content.replace(/\n/g, ""));
  return { content: JSON.parse(decoded), sha: data.sha };
}

async function updateGitHubFile(
  env: Env,
  content: Record<string, unknown>,
  sha: string
) {
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2) + "\n")));

  const res = await fetch(
    `https://api.github.com/repos/${env.GITHUB_REPO}/contents/${CONTENT_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "krebs-hausmeisterservice",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Inhalte über Admin-Bereich aktualisiert",
        content: encoded,
        sha,
      }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`GitHub update failed: ${res.status} ${error}`);
  }

  return res.json();
}

// GET: Inhalte laden (öffentlich)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const { content } = await getGitHubFile(context.env);
    return new Response(JSON.stringify(content), { status: 200, headers });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Inhalte konnten nicht geladen werden" }),
      { status: 500, headers }
    );
  }
};

// POST: Inhalte speichern (authentifiziert)
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const body = (await request.json()) as {
      password?: string;
      data?: Record<string, unknown>;
    };

    if (!body.password || body.password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Nicht autorisiert" }), {
        status: 401,
        headers,
      });
    }

    if (!body.data) {
      return new Response(JSON.stringify({ error: "Keine Daten" }), {
        status: 400,
        headers,
      });
    }

    const { content, sha } = await getGitHubFile(env);
    const updated = { ...content, ...body.data };

    await updateGitHubFile(env, updated, sha);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Gespeichert. Die Seite wird in 1-2 Minuten aktualisiert.",
      }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Speichern fehlgeschlagen: " + (err as Error).message,
      }),
      { status: 500, headers }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
