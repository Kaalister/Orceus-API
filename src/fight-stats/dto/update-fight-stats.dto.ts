import { ApiProperty, PickType } from "@nestjs/swagger";
import { CreateFightStatsDto } from "./create-fight-stats.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateFightStatsDto extends PickType(CreateFightStatsDto, [
    'agi',
    'att',
    'cac',
    'def',
    'defMag',
    'defPhy',
    'dist',
    'dodge',
    'mag',
    'puiss',
    'stren',
    'vit',
]) {
    @ApiProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsString()
    readonly id: string;
}