import { ApiProperty, PickType } from "@nestjs/swagger";
import { 
    IsNotEmpty,
    IsString,
} from "class-validator";
import { CreateCharacterDto } from "./create-character.dto";

export class UpdateCharacterDto extends PickType(CreateCharacterDto, [
    'config',
    'equipment',
    'fight',
    'firstname',
    'hp',
    'hpMax',
    'image',
    'inventory',
    'job',
    'lastname',
    'level',
    'lore',
    'notes',
    'skills',
    'specie',
    'stats',
    'yearOld',
    'dead',
]) {
    @ApiProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsString()
    readonly id: string;
}