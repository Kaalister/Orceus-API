import { ApiProperty, PickType } from "@nestjs/swagger";
import {
    IsNotEmpty, 
    IsString,
} from "class-validator";
import { CreateInventoryItemDto } from "./create-inventory-item.dto";

export class UpdateInventoryItemDto extends PickType(CreateInventoryItemDto, [
    'nb',
    'name',
    'type',
    'stage',
    'carac',
    'desc',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    id!: string;
}