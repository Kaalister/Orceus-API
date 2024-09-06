import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateStatsDto {
    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly agi?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly att?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly char?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly def?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly luck?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly obs?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly prec?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly pui?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly stren?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly vit?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly know?: number = 0;

    @IsEmpty()
    readonly id?: string;
}