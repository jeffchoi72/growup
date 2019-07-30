import * as crypto from 'crypto';

const encryptPassword = (plainPassword: string) => {
  const { ENCRYPT_KEY } = process.env;

  console.log('plainPassword: ', plainPassword);
  const hash = crypto
    .createHmac('sha512', ENCRYPT_KEY)
    .update(plainPassword)
    .digest('hex');

  return hash;
};

export { encryptPassword };
