import productRoutes from '../components/product/product.route';
import userRoutes from '../components/user/user.route';
import { Application } from 'express';

/**
 * Init All routes here
 */
const initRoutes = (app: Application): void => {
  app.use('/api/user', userRoutes); //
  app.use('/api/product', productRoutes); //
};

export default initRoutes;
