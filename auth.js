import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import prisma from "@lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user;

      let existingUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!existingUser) {
        if (!name || !email || !image) {
          throw new Error("Missing fields");
        }

        existingUser = await prisma.user.create({
          data: {
            name,
            email,
            imageUrl: image,
          },
        });
      }

      user.id = existingUser.id;
      return true;
    },
    jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  session: { maxAge: 60 * 15 },
  pages: {
    signIn: "/auth/login",
  },
});
