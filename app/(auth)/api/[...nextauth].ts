import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials ?? {};

          const res = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            throw new Error("Invalid credentials");
          }

          const parsedResponse = await res.json();
          const jwt = parsedResponse.access_token;
          return {
            id: parsedResponse.user.id,
            name: parsedResponse.user.name, // Assuming the user object has a name
            email, // Assuming the user object has an email
            jwt,
          };
        } catch (error:any) {
          console.error("Authentication error:", error.message);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to your custom login page
  },
});
