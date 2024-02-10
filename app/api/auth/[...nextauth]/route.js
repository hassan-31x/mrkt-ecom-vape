import NextAuth from "next-auth";
import { newOptions } from "./option";
// import { options } from "./options";

const handler = NextAuth(newOptions)

export { handler as GET, handler as POST }