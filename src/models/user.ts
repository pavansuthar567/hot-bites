import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
  address?: string; // Optional for now
  phone: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
    role: { type: String, enum: ['customer', 'admin'], required: true },
    address: { type: String }, // Optional for now
    phone: { type: String, required: true },
  },
  { versionKey: false },
);

// Export the model
const UserModel: Model<IUser> = mongoose.model<IUser>('users', userSchema);
export default UserModel;
