import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
    async handleFileUpload(file: any) {
        return {
            message: 'File uploaded successfully',
            filename: file.filename,
            originalname: file.originalname,
        };
    }
}
