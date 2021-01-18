import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";

const options: InitOptions = {
  providers: [
    // Providers.Apple({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    // }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Sign in with passwordless email link
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    jwt: true,
  },
  database: {
    type: "mongodb",
    useNewUrlParser: true,
    url: process.env.DATABASE_URL,
  },
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
