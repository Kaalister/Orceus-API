import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateEquipmentDto } from "./create-equipment.dto";

export class UpdateEquipmentDto extends OmitType(CreateEquipmentDto, [
    'id'
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}