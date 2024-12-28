// src/config/passportConfig.ts

import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import UserModel from '../models/user'; // Adjust the path to your User model

const opts: any = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET, // Ensure to set this in your environment variables
};

const passportConfig = (passport: any) => {
  passport.use(
    new JwtStrategy(opts, async (jwtPayload: any, done: any) => {
      try {
        const user = await UserModel.findById(jwtPayload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }),
  );
};

export default passportConfig;
