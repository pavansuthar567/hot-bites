import OrderModel from '../models/order';

export default class OrderService {
  static async getOrders(): Promise<any> {
    // Logic to fetch orders from the database
    try {
      const orders = await OrderModel.find();
      return orders;
    } catch (error) {
      throw new Error('Error fetching orders');
    }
  }

  static async getOrderById(orderId: string): Promise<any> {
    // Logic to get a single order by ID
    try {
      const order = await OrderModel.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      return order;
    } catch (error) {
      throw new Error('Error fetching order');
    }
  }

  static async createOrder(orderData: any): Promise<any> {
    try {
      // Create a new order instance
      const newOrder = new OrderModel(orderData);
      await newOrder.save();
      return newOrder;
    } catch (error: any) {
      console.error('Error creating order:', error.message);
    }
  }

  static async deleteOrder(orderId: string): Promise<any> {
    // Logic to delete an order from the database
    try {
      const deletedOrder = await OrderModel.findByIdAndDelete(orderId);
      if (!deletedOrder) {
        throw new Error('Order not found');
      }
      return deletedOrder;
    } catch (error) {
      throw new Error('Error deleting order');
    }
  }

  static async updateOrder(orderId: string, updateData: any): Promise<any> {
    // Logic to update order information in the database
    try {
      const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, updateData, { new: true });
      if (!updatedOrder) {
        throw new Error('Order not found');
      }
      return updatedOrder;
    } catch (error: any) {
      throw new Error('Error updating order: ' + error.message);
    }
  }

  static async getOrderStatus(orderId: string): Promise<any> {
    try {
      const order = await OrderModel.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      return { status: order.status };
    } catch (error) {
      throw new Error('Error fetching order status');
    }
  }
}
