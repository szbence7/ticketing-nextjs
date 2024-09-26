import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // If the user is authenticated, allow the request
    if (req.nextauth.token) {
      return NextResponse.next()
    }

    // If not authenticated, redirect to the login page
    return NextResponse.redirect(new URL("/api/auth/signin", req.url))
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

// Specify which routes this middleware should run on
export const config = {
  matcher: ["/admin/:path*"]
}
