import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpCode,
    HttpException,
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags
} from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@ApiTags('cards')
@Controller('cards')
export class CardsController {
    constructor(private readonly cardService: CardsService) {}

    @ApiOperation({ summary: 'Get all cards' })
    @ApiOkResponse({ type: [Card] })
    @Get()
    findAll() {
        return this.cardService.findAll();
    }

    @ApiOperation({ summary: 'Get card by id' })
    @ApiOkResponse({ type: Card })
    @ApiNotFoundResponse({ description: 'Card not found' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cardService.findOne(id);
    }

    @ApiOperation({ summary: 'Create new Card' })
    @ApiCreatedResponse({
        description: 'Card created',
        type: Card,
    })
    @Post()
    createCard(@Body() newCard: CreateCardDto) {
        return this.cardService.createCard(newCard);
    }

    @ApiOperation({ summary: 'Update card by id' })
    @ApiOkResponse({ type: Card })
    @ApiNotFoundResponse({ description: 'Card not found' })
    @Put(':id')
    updateCard(@Param('id') id: string, @Body() updateCard: UpdateCardDto) {
        return this.cardService.updateCard(id, updateCard);
    }

    @ApiOperation({ summary: 'Delete card by id' })
    @ApiNoContentResponse({ description: 'Deleted with success' })
    @ApiNotFoundResponse({ description: 'Card not found' })
    @Delete(':id')
    @HttpCode(204)
    deleteCard(@Param('id') id: string) {
        return this.cardService.deleteCard(id);
    }
}
