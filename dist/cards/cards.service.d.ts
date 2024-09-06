import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entities/card.entity';
import { UpdateCardDto } from './dto/update-card.dto';
import { ImagesService } from 'src/images/images.service';
export declare class CardsService {
    private readonly cardRepository;
    private readonly imagesService;
    constructor(cardRepository: Repository<Card>, imagesService: ImagesService);
    findAll(): Promise<Card[]>;
    findOne(id: string): Promise<Card>;
    createCard(card: CreateCardDto): Promise<Card>;
    updateCard(id: string, updatedCard: Partial<UpdateCardDto>): Promise<Card>;
    deleteCard(id: string): Promise<import("typeorm").DeleteResult>;
}
