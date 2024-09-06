import { ApiProperty, OmitType } from "@nestjs/swagger";
import { 
    IsNotEmpty,
    IsString,
} from "class-validator";
import { CreateCharacterDto } from "./create-character.dto";

export class UpdateCharacterDto extends OmitType(CreateCharacterDto, [
    'id',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}