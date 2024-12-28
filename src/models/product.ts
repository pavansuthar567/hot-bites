import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  image?: string; // Optional
  category: string; // e.g., Dabeli, Vadapav
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String }, // Optional
    category: { type: String, required: true },
  },
  { versionKey: false },
);

// Export the model
const ProductModel: Model<IProduct> = mongoose.model<IProduct>('products', productSchema);
export default ProductModel;
