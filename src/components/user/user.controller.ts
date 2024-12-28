import { Request, Response } from 'express';
import UserService from '../../services/userService';
import { createError, createResponse } from '../../utils/helpers';
import jwt from 'jsonwebtoken';

export default class UserController {
  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getUsers();
      createResponse(res, 'ok', 'Users retrieved successfully', users);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve users' });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.getUserById(req.params.id);

      createResponse(res, 'ok', 'User retrieved successfully', user);
    } catch (error) {
      createError(res, error, { message: 'Failed to retrieve user' });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.createUser(req.body);
      createResponse(res, 'ok', 'User created successfully', user);
    } catch (error) {
      createError(res, error, { message: 'Failed to create user' });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const updatedUser = await UserService.updateUser(req.params.id, req.body);
      createResponse(res, 'ok', 'User updated successfully', updatedUser);
    } catch (error) {
      createError(res, error, { message: 'Failed to update user' });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await UserService.deleteUser(req.params.id);
      createResponse(res, 'ok', 'User deleted successfully', {});
    } catch (error) {
      createError(res, error, { message: 'Failed to delete user' });
    }
  }

  static async forgotPassword(req: Request, res: Response): Promise<void> {
    try {
      await UserService.forgotPassword(req.body.email);
      createResponse(res, 'ok', 'Password reset link sent', {});
    } catch (error) {
      createError(res, error, { message: 'Failed to send password reset link' });
    }
  }

  static async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      await UserService.resetPassword(req.body.password, req.body.confirmPassword);
      createResponse(res, 'ok', 'Password reset successfully', {});
    } catch (error) {
      createError(res, error, { message: 'Failed to reset password' });
    }
  }

  static async loginUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await UserService.loginUser(email, password);

      if (!user) {
        createError(res, new Error('Invalid credentials'), { message: 'Login failed' });
        return;
      }

      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined');
      }

      const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, { expiresIn: '1h' });
      createResponse(res, 'ok', 'Login successful', { token });
    } catch (error) {
      createError(res, error, { message: 'Failed to login' });
    }
  }
}
