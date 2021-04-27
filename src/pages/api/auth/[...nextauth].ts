import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { IncomingMessage, ServerResponse } from 'http';

interface GenericObject {
  [key: string]: any;
}

interface NextApiRequest extends IncomingMessage, GenericObject {
  query: {
      [key: string]: string | string[];
  };
  cookies: {
      [key: string]: string;
  };
  body: any;
}

interface NextApiResponse<T = any> extends ServerResponse, GenericObject {
  send: Send<T>;
  json: Send<T>;
  status: (statusCode: number) => NextApiResponse<T>;
}

type Send<T> = (body: T) => void;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)