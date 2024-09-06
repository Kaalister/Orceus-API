import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateFightStatsDto {
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
    readonly def?: number = 0;

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
    readonly puiss?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly cac?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly dist?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly mag?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly defPhy?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly defMag?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly dodge?: number = 0;

    @IsEmpty()
    readonly id?: string;
}