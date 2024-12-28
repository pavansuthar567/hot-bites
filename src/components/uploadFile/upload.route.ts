import express, { Request, Response } from 'express';
import FileUploadController from './upload.controller';
import upload from '../../config/multer';
import authenticateJWT from '../../middleware/authMiddleware';

const router = express.Router();

/**
 * @route POST /api/upload
 * @description Upload Media files
 * @returns Files
 * @access private
 */
router.post(
  '/',
  authenticateJWT,
  upload.array('files', 10000),
  (req: Request, res: Response<any, Record<string, any>>) => {
    FileUploadController.uploadFile(req, res);
  },
);

/**
 * @route DELETE /api/upload
 * @description Delete Media files
 * @returns Files
 * @access private
 */
router.delete('/', authenticateJWT, (req: Request, res: Response<any, Record<string, any>>) => {
  FileUploadController.deleteFile(req, res);
});

const fileUploadRoutes = router;
export default fileUploadRoutes;