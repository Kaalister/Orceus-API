import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';
export declare class ImagesService {
    private imagesRepository;
    constructor(imagesRepository: Repository<Image>);
    createImage(file: Express.Multer.File): Promise<CreateImageDto>;
    deleteImage(id: string): Promise<void>;
}
