import express, { Request, Response } from 'express';
import OrderValidations from './order.validations';
import OrderController from './order.controller';
import authenticateJWT from '../../middleware/authMiddleware';

const router = express.Router();

/**
 * @route GET /api/orders
 * @description Get list of orders
 * @returns JSON
 * @access private
 */
router.get('/', authenticateJWT, (req: Request, res: Response) => {
  OrderController.getOrders(req, res);
});

/**
 * @route POST /api/orders
 * @description Create a new order
 * @returns JSON
 * @access private
 */
router.post('/', authenticateJWT, OrderValidations.createOrder, (req: Request, res: Response) => {
  OrderController.createOrder(req, res);
});

/**
 * @route GET /api/orders/:id
 * @description Get a single order by ID
 * @returns JSON
 * @access private
 */
router.get('/:id', authenticateJWT, (req: Request, res: Response) => {
  OrderController.getOrderById(req, res);
});

/**
 * @route PUT /api/orders/:id
 * @description Update an order by ID
 * @returns JSON
 * @access private
 */
router.put('/:id', authenticateJWT, OrderValidations.updateOrder, (req: Request, res: Response) => {
  OrderController.updateOrder(req, res);
});

/**
 * @route DELETE /api/orders/:id
 * @description Delete an order by ID
 * @returns JSON
 * @access private
 */
router.delete('/:id', authenticateJWT, (req: Request, res: Response) => {
  OrderController.deleteOrder(req, res);
});

/**
 * @route GET /api/orders/:id/status
 * @description Get current order status
 * @returns JSON
 * @access private
 */
router.get('/:id/status', authenticateJWT, (req: Request, res: Response) => {
  OrderController.getOrderStatus(req, res);
});

const orderRoutes = router;
export default orderRoutes;
