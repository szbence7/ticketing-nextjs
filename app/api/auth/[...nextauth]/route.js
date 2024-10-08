import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add your own logic here to find the user from credentials
        const user = { id: 1, name: "User", email: "user@example.com", password: "password" };
        if (credentials.username === user.name && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    }),
    // Add more providers here
  ],
  // Optional: Add custom pages, callbacks, etc.
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
