import { CreateCardDto } from './create-card.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class UpdateCardDto extends OmitType(CreateCardDto, [
    'id',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}