import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    findAll(): Promise<import("./entities/character.entity").Character[]>;
    findOne(id: string): Promise<import("./entities/character.entity").Character>;
    createCharacter(character: CreateCharacterDto): Promise<import("./entities/character.entity").Character>;
    updateCharacter(id: string, updatedCharacter: UpdateCharacterDto): Promise<import("./entities/character.entity").Character>;
    deleteCharacter(id: string): void;
}
