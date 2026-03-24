interface Env {
  ADMIN_PASSWORD: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const body = (await request.json()) as { password?: string };

    if (!body.password) {
      return new Response(JSON.stringify({ error: "Passwort fehlt" }), {
        status: 400,
        headers,
      });
    }

    if (body.password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Falsches Passwort" }), {
        status: 401,
        headers,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Ungültige Anfrage" }), {
      status: 400,
      headers,
    });
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
