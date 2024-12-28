import FileUploadService from '../../services/fileUploadService';
import { createError, createResponse } from '../../utils/helpers';

export default class FileUploadController {
  static async uploadFile(req: Request | any, res: Response | any): Promise<void> {
    try {
      const files = req.files; // Access the uploaded file
      if (!files || files?.length === 0) {
        createError(res, { message: 'No files uploaded.' });
      }
      const data = await FileUploadService.upload(req);
      createResponse(res, 'ok', 'File uploaded successfully', data);
    } catch (error) {
      console.error('Error uploading file:', error);
      createError(res, error, { message: 'Upload failed' });
    }
  }

  static async deleteFile(req: Request | any, res: Response | any): Promise<void> {
    try {
      const data = await FileUploadService.delete(req);
      createResponse(res, 'ok', 'File deleted successfully', data);
    } catch (error) {
      console.error('Error uploading file:', error);
      createError(res, error, { message: 'Delete failed' });
    }
  }
}
