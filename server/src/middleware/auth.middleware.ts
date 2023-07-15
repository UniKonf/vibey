import { NextFunction, Request, RequestHandler, Response } from 'express';
import { expressjwt, GetVerificationKey } from 'express-jwt';
import jwt from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';

interface AuthMiddleware {
  [key: string]: RequestHandler;
}

const authMiddleware: AuthMiddleware = {};

// Middleware for Google authentication
authMiddleware.google = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://www.googleapis.com/oauth2/v3/certs',
  }) as GetVerificationKey,
  audience: process.env.GOOGLE_AUDIENCE,
  issuer: 'https://accounts.google.com',
  algorithms: ['RS256'],
});

// Middleware for GitHub authentication
authMiddleware.github = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(
      token as string,
      process.env.YOUR_SECRET as string
    ) as object;
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
};

// Middleware for custom email/password registration
authMiddleware.custom = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(
      token as string,
      process.env.YOUR_SECRET as string
    ) as object;
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
};

// Check authentication method and apply corresponding auth middleware
const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authMethod } = req.headers;

  if (authMethod === 'google') {
    authMiddleware.google(req, res, next);
  } else if (authMethod === 'github') {
    authMiddleware.github(req, res, next);
  } else if (authMethod === 'custom') {
    authMiddleware.custom(req, res, next);
  } else {
    res
      .status(401)
      .json({ success: false, error: 'Invalid authentication method' });
  }
};

export default checkAuth;
