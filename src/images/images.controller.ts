import {
    Controller,
    Post,
    Delete,
    UseInterceptors,
    UploadedFile,
    Param,
    HttpCode,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotAcceptableResponse,
    ApiNotFoundResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from './images.service';
import { Image } from './entities/image.entity';
import { join } from 'path';
import { homedir } from 'os';

@ApiTags('images')
@Controller('images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService){}

    @ApiOperation({ description: 'Upload image' })
    @ApiCreatedResponse({
        description: 'Image created',
        type: Image,
    })
    @ApiNotAcceptableResponse({ description: 'File not acceptable' })
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: join(homedir(), 'images'),
            filename: (_, file: any, callback: Function) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            }
        })
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.imagesService.createImage(file);
    }

    @ApiOperation({ description: 'Delete image' })
    @ApiNoContentResponse({ description: 'Delete with success' })
    @ApiNotFoundResponse({
        description: 'Image not found'
    })
    @Delete(':id')
    @HttpCode(204)
    async deleteFile(@Param('id') id: string) {
        return this.imagesService.deleteImage(id);
    }
}
