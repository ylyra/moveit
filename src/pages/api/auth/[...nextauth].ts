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
      clientId: "fbfa39fff851d8b4de21",
      clientSecret: "38fa5ba9351009833dd5c2926ed2543a6083f7cb"
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: "wsm4qctl2g9imj6ollam",
  jwt: {
    secret: "1cuwhpfcwftnznpt3o0p"
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)