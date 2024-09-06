import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateStatsDto } from "./create-stats.dto";

export class UpdateStatsDto extends OmitType(CreateStatsDto, [
    'id',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}