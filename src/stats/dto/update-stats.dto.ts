import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateStatsDto } from "./create-stats.dto";

export class UpdateStatsDto extends PickType(CreateStatsDto, [
    'agi',
    'att',
    'char',
    'def',
    'know',
    'luck',
    'obs',
    'prec',
    'pui',
    'stren',
    'vit',
]) {
    @ApiProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsString()
    readonly id?: string;
}