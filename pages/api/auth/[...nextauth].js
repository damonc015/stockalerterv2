import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connect } from "../database";

export default NextAuth({
  session: { jwt: true },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connect();
        const usernames = client.db().collection("user");
        const user = await usernames.findOne({
          Username: credentials.username,
        });
        const password = await usernames.findOne({
          Password: credentials.password,
        });
        if (!user) {
          throw new Error("Invalid Username");
        }
        if (!password) {
          throw new Error("Invalid Password");
        }
        client.close();
        return { username: user.username };
      },
    }),
  ],
});
