import { Request, Response } from 'express';
import ProductService from '../../services/productService';
import { createError, createResponse } from '../../utils/helpers';

export default class ProductController {
  static async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductService.getProducts();
      createResponse(res, 'ok', 'Products retrieved successfully', products);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve products' });
    }
  }

  static async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const product = await ProductService.getProductById(req.params.id);
      createResponse(res, 'ok', 'Product retrieved successfully', product);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve product' });
    }
  }

  static async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await ProductService.createProduct(req.body);
      createResponse(res, 'ok', 'Product created successfully', product);
    } catch (error) {
      createError(res, error, { message: 'Failed to create product' });
    }
  }

  static async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
      createResponse(res, 'ok', 'Product updated successfully', updatedProduct);
    } catch (error) {
      createError(res, error, { message: 'Failed to update product' });
    }
  }

  static async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      await ProductService.deleteProduct(req.params.id);
      createResponse(res, 'ok', 'Product deleted successfully', {});
    } catch (error) {
      createError(res, error, { message: 'Failed to delete product' });
    }
  }
}
