import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';

const authMiddleware = {};

// Middleware for Google authentication
authMiddleware.google = expressJwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://www.googleapis.com/oauth2/v3/certs',
  }),
  audience: process.env.GOOGLE_AUDIENCE,
  issuer: 'https://accounts.google.com',
  algorithms: ['RS256'],
});

// Middleware for GitHub authentication
authMiddleware.github = (req, res, next) => {
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(token, process.env.YOUR_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Middleware for custom email/password registration
authMiddleware.custom = (req, res, next) => {
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(token, process.env.YOUR_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default authMiddleware;
