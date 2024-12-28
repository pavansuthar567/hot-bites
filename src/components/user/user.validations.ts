import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const UserValidations = {
  createUser: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])'))
        .message(
          'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character',
        )
        .required(),
      email: Joi.string().email().required(), // Email must be unique (handled at the database level)
      role: Joi.string().valid('customer', 'admin').required(), // Role must be either customer or admin
      address: Joi.string().optional(), // Address is optional for now
      phone: Joi.string().optional(), // Phone is optional
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.details[0].message,
      });
    } else {
      next();
    }
  },

  updateUser: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).optional(), // Name is optional for updates
      password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])'))
        .message(
          'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character',
        )
        .optional(), // Password is optional for updates, but can be provided
      email: Joi.string().email().optional(), // Email is optional for updates
      role: Joi.string().valid('customer', 'admin').optional(), // Role is optional for updates
      address: Joi.string().optional(), // Address is optional for updates
      phone: Joi.string().optional(), // Phone is optional for updates
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.details[0].message,
      });
    } else {
      next();
    }
  },

  forgotPassword: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.details[0].message,
      });
    } else {
      next();
    }
  },

  resetPassword: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])'))
        .message(
          'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character',
        )
        .required(),
      confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.details[0].message,
      });
    } else {
      next();
    }
  },

  loginUser: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])'))
        .message(
          'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character',
        )
        .required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.details[0].message,
      });
    } else {
      next();
    }
  },
};

export default UserValidations;
