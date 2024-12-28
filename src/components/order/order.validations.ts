import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const OrderValidations = {
  createOrder: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      userId: Joi.string().required(), // User ID is required
      items: Joi.array()
        .items(
          Joi.object({
            menuItemId: Joi.string().required(), // Menu item ID is required
            quantity: Joi.number().integer().greater(0).required(), // Quantity must be a positive integer
          }),
        )
        .required(), // Items array is required
      status: Joi.string().valid('pending', 'in-progress', 'out-for-delivery', 'delivered').required(), // Status must be one of the specified values
      orderTime: Joi.date().required(), // Order time is required
      deliveryTime: Joi.date().optional(), // Delivery time is optional
      totalPrice: Joi.number().greater(0).required(), // Total price must be a positive number
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

  updateOrder: (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      userId: Joi.string().optional(), // User ID is optional for updates
      items: Joi.array()
        .items(
          Joi.object({
            menuItemId: Joi.string().optional(), // Menu item ID is optional for updates
            quantity: Joi.number().integer().greater(0).optional(), // Quantity is optional for updates
          }),
        )
        .optional(), // Items array is optional for updates
      status: Joi.string().valid('pending', 'in-progress', 'out-for-delivery', 'delivered').optional(), // Status is optional for updates
      orderTime: Joi.date().optional(), // Order time is optional for updates
      deliveryTime: Joi.date().optional(), // Delivery time is optional for updates
      totalPrice: Joi.number().greater(0).optional(), // Total price is optional for updates
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

export default OrderValidations;
