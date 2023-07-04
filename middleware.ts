import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    secret: process.env.JWT_SECRET,
    callbacks: {
      authorized: ({ token }) => token?.accessToken !== undefined,
    },
  },
);

export const config = {
  matcher: "/songs",
};
