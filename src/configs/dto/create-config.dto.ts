import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateConfigDto {
    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly puissName?: string = null;

    @IsNotEmpty()
    readonly id?: string;
}