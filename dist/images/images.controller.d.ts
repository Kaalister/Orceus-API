import { ImagesService } from './images.service';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    uploadFile(file: Express.Multer.File): Promise<import("./dto/create-image.dto").CreateImageDto>;
    deleteFile(id: string): Promise<void>;
}
