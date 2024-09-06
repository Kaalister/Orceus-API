import { ApiProperty, OmitType } from "@nestjs/swagger";
import {
    IsNotEmpty, 
    IsString,
} from "class-validator";
import { CreateInventoryItemDto } from "./create-inventory-item.dto";

export class UpdateInventoryItemDto extends OmitType(CreateInventoryItemDto, [
    'id',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}