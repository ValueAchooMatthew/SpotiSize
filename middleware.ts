import { withAuth } from "next-auth/middleware";

export default withAuth(
  {
    secret: process.env.JWT_SECRET,
    callbacks: {
      authorized: ({ token }) => token?.accessToken !== undefined,
    },
  },
);

export const config = {
  matcher: "/profile",
};
