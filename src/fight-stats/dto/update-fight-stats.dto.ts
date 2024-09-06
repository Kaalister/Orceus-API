import { ApiProperty, OmitType } from "@nestjs/swagger";
import { CreateFightStatsDto } from "./create-fight-stats.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateFightStatsDto extends OmitType(CreateFightStatsDto, [
    'id',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}