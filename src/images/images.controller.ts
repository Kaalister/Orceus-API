import {
    Controller,
    Post,
    Delete,
    UseInterceptors,
    UploadedFile,
    Param,
    HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private readonly imagesService:ImagesService){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './images',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            }
        }),
        fileFilter: (_: any , file: any, callback: Function) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
                return callback(
                    new Error('Only image files are allowed!'),
                    false
                );
            callback(null, true);
        }
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.imagesService.createImage(file);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteFile(@Param('id') id: string) {
        return this.imagesService.deleteImage(id);
    }
}
