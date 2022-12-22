import { useState } from "react";
import { useRouter } from "next/router";
import { fetchJson } from "../lib/api";
import Input from "../components/Input";
import Field from "../components/Field";
import Page from "../components/Page";
import Button from "../components/Button";
import toast from "react-hot-toast";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log(response);
      toast.success("Login successfully");
      router.push("/");
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Field>
        <Button type="submit">Sign In</Button>
      </form>
    </Page>
  );
}

export default SignIn;
