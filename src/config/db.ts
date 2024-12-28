import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', {});
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};

export default connectDB;
