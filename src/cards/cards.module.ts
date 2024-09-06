import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card } from './entities/card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesService } from 'src/images/images.service';
import { Image } from 'src/images/entities/image.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Card,
            Image,
        ])
    ],
    controllers: [CardsController],
    providers: [
        CardsService,
        ImagesService,
    ]
})
export class CardsModule {}
