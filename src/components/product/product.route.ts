import express, { Request, Response } from 'express';
import ProductValidations from './product.validations';
import ProductController from './product.controller';
import authenticateJWT from '../../middleware/authMiddleware';

const router = express.Router();

/**
 * @route GET /api/products
 * @description Get list of products
 * @returns JSON
 * @access private
 */
router.get('/', authenticateJWT, (req: Request, res: Response) => {
  ProductController.getProducts(req, res);
});

/**
 * @route POST /api/products
 * @description Create a new product
 * @returns JSON
 * @access private
 */
router.post('/', authenticateJWT, ProductValidations.createProduct, (req: Request, res: Response) => {
  ProductController.createProduct(req, res);
});

/**
 * @route GET /api/products/:id
 * @description Get a single product by ID
 * @returns JSON
 * @access private
 */
router.get('/:id', authenticateJWT, (req: Request, res: Response) => {
  ProductController.getProductById(req, res);
});

/**
 * @route PUT /api/products/:id
 * @description Update a product by ID
 * @returns JSON
 * @access private
 */
router.put('/:id', authenticateJWT, ProductValidations.updateProduct, (req: Request, res: Response) => {
  ProductController.updateProduct(req, res);
});

/**
 * @route DELETE /api/products/:id
 * @description Delete a product by ID
 * @returns JSON
 * @access private
 */
router.delete('/:id', authenticateJWT, (req: Request, res: Response) => {
  ProductController.deleteProduct(req, res);
});

const productRoutes = router;
export default productRoutes;
