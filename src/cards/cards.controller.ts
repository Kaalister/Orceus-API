import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpCode,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
    constructor(private readonly cardService: CardsService) {}

    @Get()
    findAll() {
        return this.cardService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cardService.findOne(id);
    }

    @Post()
    createCard(@Body() newCard: CreateCardDto) {
        return this.cardService.createCard(newCard);
    }

    @Put(':id')
    updateCard(@Param('id') id: string, @Body() updateCard: UpdateCardDto) {
        return this.cardService.updateCard(id, updateCard);
    }

    @Delete(':id')
    @HttpCode(204)
    deleteCard(@Param('id') id: string) {
        return this.cardService.deleteCard(id);
    }
}
