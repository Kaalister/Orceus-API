import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class CharactersService {
    constructor(
        @InjectRepository(Character)
        private readonly charactersRepository: Repository<Character>,
        private readonly imagesService: ImagesService
    ) {}

    findAll(): Promise<Character[]> {
        return this.charactersRepository.find();
    }

    findOne(id: string): Promise<Character> {
        return this.charactersRepository.findOneBy({ id });
    }

    createCharacter(newCharacter: CreateCharacterDto): Promise<Character> {
        return this.charactersRepository.save(
            this.charactersRepository.create(newCharacter)
        );
    }

    async updateCharacter(id: string, updatedCharacter: UpdateCharacterDto): Promise<Character> {
        const character = await this.charactersRepository.findOneBy({ id })

        if (!character)
            throw new NotFoundException(
                `The character with the id : ${id} not found`
            )

        return await this.charactersRepository.save(
            this.charactersRepository.create({
                ...character,
                ...updatedCharacter,
            })
        );
    }

    async deleteCharacter(id: string) {
        const character = await this.charactersRepository.findOneBy({ id })

        if (!character)
            throw new NotFoundException(
                `The character with the id : ${id} is not found`
            )
        
        if (character.image)
            this.imagesService.deleteImage(character.image.id)
        
        await this.charactersRepository.delete({ id });
    }
}
