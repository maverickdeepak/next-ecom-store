import { fetchJson } from "../../lib/api";
const { CMS_URL } = process.env;
import cookie from "cookie";

async function handleLogin(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
  }
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, {
          path: "/api",
          httpOnly: true,
        })
      )
      .json({
        id: user.id,
        name: user.username,
      });
  } catch (error) {
    res.status(401).end();
  }
}

export default handleLogin;
