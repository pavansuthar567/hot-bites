import ProductModel from '../models/product';

export default class ProductService {
  static async getProducts(): Promise<any> {
    // Logic to fetch products from the database
    try {
      const products = await ProductModel.find();
      return products;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  }

  static async getProductById(productId: string): Promise<any> {
    // Logic to get a single product by ID
    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error fetching product');
    }
  }

  static async createProduct(productData: any): Promise<any> {
    try {
      // Create a new product instance
      const newProduct = new ProductModel(productData);
      await newProduct.save();
      return newProduct;
    } catch (error: any) {
      if (error.code === 11000) {
        // Handle duplicate key error
        if (error?.keyValue?.name) {
          console.error('Product name must be unique:', error.keyValue.name);
        }
      } else {
        console.error('Error creating product:', error.message);
      }
    }
  }

  static async deleteProduct(productId: string): Promise<any> {
    // Logic to delete a product from the database
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(productId);
      if (!deletedProduct) {
        throw new Error('Product not found');
      }
      return deletedProduct;
    } catch (error) {
      throw new Error('Error deleting product');
    }
  }

  static async updateProduct(productId: string, updateData: any): Promise<any> {
    // Logic to update product information in the database
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updateData, { new: true });
      if (!updatedProduct) {
        throw new Error('Product not found');
      }
      return updatedProduct;
    } catch (error: any) {
      if (error.code === 11000) {
        throw new Error('Duplicate key error: ' + JSON.stringify(error.keyValue));
      }
      throw new Error('Error updating product: ' + error.message);
    }
  }
}
