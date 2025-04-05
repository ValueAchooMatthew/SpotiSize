import { authOptions } from "@/app/_utlis/auth-js-config";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
