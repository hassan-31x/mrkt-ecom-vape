import NextAuth from "next-auth";
// import { options } from "./options";
import { options as newOptions } from "@/pages/api/auth/[...nextauth]";

const handler = NextAuth(newOptions)

export { handler as GET, handler as POST }