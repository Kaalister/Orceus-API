import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
export declare class CardsController {
    private readonly cardService;
    constructor(cardService: CardsService);
    findAll(): Promise<import("./entities/card.entity").Card[]>;
    findOne(id: string): Promise<import("./entities/card.entity").Card>;
    createCard(newCard: CreateCardDto): Promise<import("./entities/card.entity").Card>;
    updateCard(id: string, updateCard: UpdateCardDto): Promise<import("./entities/card.entity").Card>;
    deleteCard(id: string): Promise<import("typeorm").DeleteResult>;
}
