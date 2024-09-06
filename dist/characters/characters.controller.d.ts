import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    findAll(): Promise<Character[]>;
    findOne(id: string): Promise<Character>;
    createCharacter(character: CreateCharacterDto): Promise<Character>;
    updateCharacter(id: string, updatedCharacter: UpdateCharacterDto): Promise<Character>;
    deleteCharacter(id: string): void;
}
