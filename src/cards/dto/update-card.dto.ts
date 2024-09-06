import { CreateCardDto } from './create-card.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import {
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateCardDto extends OmitType(CreateCardDto, [
    'id',
]) {
    @ApiProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsOptional()
    @IsString()
    readonly id?: string;
}