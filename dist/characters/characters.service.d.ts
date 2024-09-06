import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { ImagesService } from 'src/images/images.service';
export declare class CharactersService {
    private readonly charactersRepository;
    private readonly imagesService;
    constructor(charactersRepository: Repository<Character>, imagesService: ImagesService);
    findAll(): Promise<Character[]>;
    findOne(id: string): Promise<Character>;
    createCharacter(newCharacter: CreateCharacterDto): Promise<Character>;
    updateCharacter(id: string, updatedCharacter: UpdateCharacterDto): Promise<Character>;
    deleteCharacter(id: string): Promise<void>;
}
