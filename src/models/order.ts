import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId; // Reference to User
  items: Array<{
    menuItemId: mongoose.Types.ObjectId; // Reference to Menu Item
    quantity: number;
  }>;
  status: 'pending' | 'in-progress' | 'out-for-delivery' | 'delivered';
  orderTime: Date;
  deliveryTime: Date;
  totalPrice: number;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    items: [
      {
        menuItemId: { type: Schema.Types.ObjectId, ref: 'menuItems', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: { type: String, enum: ['pending', 'in-progress', 'out-for-delivery', 'delivered'], required: true },
    orderTime: { type: Date, required: true },
    deliveryTime: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
  },
  { versionKey: false },
);

// Export the model
const OrderModel: Model<IOrder> = mongoose.model<IOrder>('orders', orderSchema);
export default OrderModel;
