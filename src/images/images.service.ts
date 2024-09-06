import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
    constructor(
        @InjectRepository(Image)
        private imagesRepository: Repository<Image>,
    ) {}

    createImage(file: Express.Multer.File): Promise<CreateImageDto> {
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
