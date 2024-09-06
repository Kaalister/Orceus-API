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
    @ApiPropertyOptional({
        type: () => [CreateImageDto],
        example: '[123e4567-e89b-12d3-a456-426614174000, 123e4567-e89b-12d3-a456-426614174000]'
    })
    @IsOptional()
    @Type(() => CreateImageDto)
    readonly images?: CreateImageDto[] = [];

    @ApiPropertyOptional({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsOptional()
    @Type(() => CreateImageDto)
    readonly mainImage?: CreateImageDto = null;

    @ApiPropertyOptional({
        type: Number,
        example: 1
    })
    @IsNotEmpty()
    @IsDecimal()
    readonly cardNum?: number;

    @ApiPropertyOptional({
        type: String,
        example: 'Voici une description'
    })
    @IsOptional()
    @IsString()
    readonly desc?: string = '';

    @ApiPropertyOptional({
        type: Boolean
    })
    @IsOptional()
    @IsBoolean()
    readonly hidden?: boolean = false;

    @ApiPropertyOptional({
        type: String,
        example: 'toto'
    })
    @IsOptional()
    @IsString()
    readonly name?: string = '';

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    readonly specie?: string = '';

    @ApiPropertyOptional({
        type: [String],
    })
    @IsOptional()
    @IsArray()
    readonly tags?: string[] = [];

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    readonly type?: string;

    @IsEmpty()
    readonly id?: string;
}