import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entities/card.entity';
import { UpdateCardDto } from './dto/update-card.dto';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Card)
        private readonly cardRepository: Repository<Card>,

        private readonly imagesService:ImagesService
    ) {}

    findAll(): Promise<Card[]> {
        return this.cardRepository.find();
    }

    findOne(id: string): Promise<Card> {
        return this.cardRepository.findOneBy({ id });
    }

    createCard(card: CreateCardDto): Promise<Card> {
        const cardEntity = plainToInstance(Card, card);

        return this.cardRepository.save(cardEntity);
    }

    async updateCard(id: string, updatedCard: Partial<UpdateCardDto>): Promise<Card> {
        const currentCard = await this.cardRepository.findOneBy({ id })

        if (!currentCard) {
            throw new NotFoundException(
                `The card with the id : ${id} is not found`
            );
        }

        await this.cardRepository.save(
            this.cardRepository.create({
                ...currentCard,
                ...updatedCard
            })
        );

        return this.cardRepository.findOneBy({ id });
    }

    async deleteCard(id: string) {
        const card = await this.cardRepository.findOneBy({ id });
        if (!card)
            throw new NotFoundException(
                `The card with the id : ${id} is not found`
            );

        const images = card.images;

        if (card.mainImage)
            images.push(card.mainImage)

        images.forEach(image => {
            this.imagesService.deleteImage(image.id);
        })

        return this.cardRepository.delete({ id });
    }
}
