import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
export declare class CardsController {
    private readonly cardService;
    constructor(cardService: CardsService);
    findAll(): Promise<Card[]>;
    findOne(id: string): Promise<Card>;
    createCard(newCard: CreateCardDto): Promise<Card>;
    updateCard(id: string, updateCard: UpdateCardDto): Promise<Card>;
    deleteCard(id: string): Promise<import("typeorm").DeleteResult>;
}
