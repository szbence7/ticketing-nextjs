import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-center">
      <h1>Welcome to Ben's Ticketing System</h1>
      {session ? (
        <>
          <br />
          <p>Signed in as {session.user.email}</p>
          <Link href="/api/auth/signout">Sign out</Link>
        </>
      ) : (
        <>
          <p>Your one-stop solution for efficient ticket management.</p>
          <p>Not signed in</p>
          <Link href="/api/auth/signin">Sign in</Link>
        </>
      )}
    </div>
  );
}
