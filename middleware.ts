import { auth } from "@/auth";

export default auth((req) => {
  req.auth;
});

// Don't invoke Middleware on paths that don't need it
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|profile).*)"], 
};
