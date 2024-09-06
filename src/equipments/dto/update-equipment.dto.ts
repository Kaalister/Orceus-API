import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateEquipmentDto } from "./create-equipment.dto";

export class UpdateEquipmentDto extends PickType(CreateEquipmentDto, [
    'amulets',
    'botClothes',
    'gloves',
    'helmets',
    'others',
    'plastrons',
    'shields',
    'shoes',
    'topClothes',
    'weapons',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id: string;
}