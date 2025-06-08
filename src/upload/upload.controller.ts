import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.strategy';

@Controller('upload')
@ApiTags('upload')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post('file')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}-${file.originalname}`);
            },
        }),
    }),)
    @ApiConsumes('multipart/form-data')
    uploadFile(@UploadedFile() file: any) {
    return this.uploadService.handleFileUpload(file);
  }
 
}

