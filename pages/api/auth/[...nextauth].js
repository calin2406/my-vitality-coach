import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

// Para debug: ver se o Client ID está a ser carregado
console.log("NEXTAUTH USING GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

export default NextAuth(authOptions);
