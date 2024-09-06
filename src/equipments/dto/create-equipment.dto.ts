import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";
import { CreateInventoryItemDto } from "src/inventory-items/dto/create-inventory-item.dto";

export class CreateEquipmentDto {
    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly weapons?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly plastrons?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly shields?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly helmets?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly gloves?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly shoes?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly topClothes?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly botClothes?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly amulets?: CreateEquipmentDto[] = [];

    @ApiPropertyOptional({ type: [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly others?: CreateEquipmentDto[] = [];

    @IsNotEmpty()
    readonly id?: string;
}