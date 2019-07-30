import * as jwt from 'jsonwebtoken';

export interface Payload {
  id: string;
  email: string;
}

const generateAuthToken = async (payload: Payload) => {
  const { SECRET_AUTH_KEY: secretAuthKey } = process.env;

  return jwt.sign(payload, secretAuthKey, {
    issuer: 'growup.io',
    expiresIn: '7d',
    subject: 'auth-token'
  });
};

const verifyAuthToken = async (token: string) => {
  const { SECRET_AUTH_KEY: secretAuthKey } = process.env;

  return jwt.verify(token, secretAuthKey);
};

export { generateAuthToken, verifyAuthToken };
