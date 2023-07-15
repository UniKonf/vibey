import jwt from 'jsonwebtoken';

const generateToken = (userId: string) => {
  const secret = process.env.YOUR_SECRET as string;
  const now = Math.floor(Date.now() / 1000);
  const iat = now - 10;
  const jwtId = Math.random().toString(36).substring(7);
  const payload = {
    iat: iat,
    jwtid: jwtId,
    audience: 'TEST',
    data: userId,
  };
  const token = jwt.sign(payload, secret, { expiresIn: '7d' });
  return token;
};

export default generateToken;
