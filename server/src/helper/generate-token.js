import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  const secret = 'MYNAMEISSULAGNAGHOSH';
  let now = Math.floor(Date.now() / 1000),
    iat = now - 10,
    jwtId = Math.random().toString(36).substring(7);
  let payload = {
    iat: iat,
    jwtid: jwtId,
    audience: 'TEST',
    data: user.id,
  };
  const token = jwt.sign(payload, secret, { expiresIn: '7d' });
  return token;
};

export default generateToken;
