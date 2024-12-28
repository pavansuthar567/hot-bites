import { Request, Response } from 'express';
import OrderService from '../../services/orderService';
import { createError, createResponse } from '../../utils/helpers';

export default class OrderController {
  static async getOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await OrderService.getOrders();
      createResponse(res, 'ok', 'Orders retrieved successfully', orders);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve orders' });
    }
  }

  static async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      createResponse(res, 'ok', 'Order retrieved successfully', order);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve order' });
    }
  }

  static async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const order = await OrderService.createOrder(req.body);
      createResponse(res, 'ok', 'Order created successfully', order);
    } catch (error) {
      createError(res, error, { message: 'Failed to create order' });
    }
  }

  static async updateOrder(req: Request, res: Response): Promise<void> {
    try {
      const updatedOrder = await OrderService.updateOrder(req.params.id, req.body);
      createResponse(res, 'ok', 'Order updated successfully', updatedOrder);
    } catch (error) {
      createError(res, error, { message: 'Failed to update order' });
    }
  }

  static async deleteOrder(req: Request, res: Response): Promise<void> {
    try {
      await OrderService.deleteOrder(req.params.id);
      createResponse(res, 'ok', 'Order deleted successfully', {});
    } catch (error) {
      createError(res, error, { message: 'Failed to delete order' });
    }
  }

  static async getOrderStatus(req: Request, res: Response): Promise<void> {
    try {
      const status = await OrderService.getOrderStatus(req.params.id);
      createResponse(res, 'ok', 'Order status retrieved successfully', status);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve order status' });
    }
  }
}
