import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsOptional,
    IsString,
    IsArray,
    IsDecimal,
    IsNotEmpty,
    IsBoolean,
    IsEmpty,
} from 'class-validator';

import { CreateImageDto } from 'src/images/dto/create-image.dto';

export class CreateCardDto {
    @ApiPropertyOptional({ type: () => [CreateImageDto] })
    @IsOptional()
    @Type(() => CreateImageDto)
    readonly images?: CreateImageDto[] = [];

    @ApiPropertyOptional({ type: () => CreateImageDto })
    @IsOptional()
    @Type(() => CreateImageDto)
    readonly mainImage?: CreateImageDto = null;

    @ApiPropertyOptional({ type: Number })
    @IsNotEmpty()
    @IsDecimal()
    readonly cardNum?: number;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly desc?: string = '';

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    readonly hidden?: boolean = false;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly name?: string = '';

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly specie?: string = '';

    @ApiPropertyOptional({ type: [String] })
    @IsOptional()
    @IsArray()
    readonly tags?: string[] = [];

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly type?: string;

    @IsEmpty()
    readonly id?: string;
}