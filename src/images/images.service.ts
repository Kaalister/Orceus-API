import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException
    } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';
import * as fs from 'fs';

@Injectable()
export class ImagesService {
    constructor(
        @InjectRepository(Image)
        private imagesRepository: Repository<Image>,
    ) {}

    createImage(file: Express.Multer.File): Promise<CreateImageDto> {
        if (!file) 
            throw new HttpException({
                status: HttpStatus.NOT_ACCEPTABLE,
                error: 'File not found',
            }, HttpStatus.NOT_ACCEPTABLE, {
                cause: 'File is empty'
            })

        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            fs.unlink(`images/${file.filename}`, error => {
                if (error) {
                    console.error({
                        message: `Le fichier n'a pas été supprimée : ${file.filename}`,
                        error: error
                    });
                }
            })
            
            throw new HttpException({
                status: HttpStatus.NOT_ACCEPTABLE,
                error: 'Only .gif/.jpg/.jpeg/.png are allowed',
            }, HttpStatus.NOT_ACCEPTABLE, {
                cause: 'File is empty'
            })
        }
            

        const newImage = {
            filename: file.filename,
            originalName: file.originalname,
            size: file.size,
        }

        return this.imagesRepository.save(
            this.imagesRepository.create(newImage)
        )
    }

    async deleteImage(id: string) {
        const image = await this.imagesRepository.findOneBy({ id })

        if (!image)
            throw new NotFoundException(
                `The image with the id : ${id} is not found`
            )
        await this.imagesRepository.remove(image);
    }

}
