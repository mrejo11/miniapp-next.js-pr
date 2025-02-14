import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from '@/app/db'

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRERET = process.env.GITHUB_CLIENT_SECRET

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRERET) {
    throw new Error('Missing github oauth credentials')
}

export const { handlers: { GET, POST }, auth, signOut, signIn } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GitHub({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRERET
        })
    ],
    callbacks: {
        //usualy not needed, here we are fixing a bug in nextauth
        async session({ session, user }: any) {
            if (session && user) {
                session.user.id = user.id
            }
            return session;
        }
    }
})