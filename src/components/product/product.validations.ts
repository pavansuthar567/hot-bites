import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const ProductValidations = {
  createProduct: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(100).required(), // Product name is required
      description: Joi.string().min(10).max(500).required(), // Product description is required
      price: Joi.number().greater(0).required(), // Product price must be a positive number
      image: Joi.string().optional(), // Image is optional
      category: Joi.string().valid('Dabeli', 'Vadapav').required(), // Category must be one of the specified values
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

  updateProduct: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(100).optional(), // Name is optional for updates
      description: Joi.string().min(10).max(500).optional(), // Description is optional for updates
      price: Joi.number().greater(0).optional(), // Price is optional for updates
      image: Joi.string().optional(), // Image is optional for updates
      category: Joi.string().valid('Dabeli', 'Vadapav').optional(), // Category is optional for updates
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

export default ProductValidations;
