import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: any, info: any) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    if (!user) {
      return res.sendStatus(401); // Unauthorized
    }
    req.user = user; // Attach user to request
    next();
  })(req, res, next);
};

export default authenticateJWT;
