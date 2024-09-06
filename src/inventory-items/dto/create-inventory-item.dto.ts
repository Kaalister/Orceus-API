import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
    IsEmpty,
    IsNotEmpty, 
    IsNumber,
    IsOptional,
    IsString,
} from "class-validator";

export class CreateInventoryItemDto {
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    readonly nb: number = 0;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly type: string;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly stage?: number = null;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly carac?: string = '';
    
    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly desc?: string = '';

    @IsEmpty()
    readonly id: string;
}