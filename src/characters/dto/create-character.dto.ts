import { ApiPropertyOptional } from "@nestjs/swagger";
import { 
    IsBoolean, 
    IsEmpty, 
    IsNumber, 
    IsOptional, 
    IsString
} from "class-validator";
import { Type } from "class-transformer";
import { CreateConfigDto } from "../../configs/dto/create-config.dto";
import { CreateEquipmentDto } from "../../equipments/dto/create-equipment.dto";
import { CreateFightStatsDto } from "../../fight-stats/dto/create-fight-stats.dto";
import { CreateInventoryItemDto } from "../../inventory-items/dto/create-inventory-item.dto";
import { CreateSkillItemDto } from "../../skills/dto/create-skill.dto";
import { CreateStatsDto } from "../../stats/dto/create-stats.dto";
import { CreateImageDto } from "src/images/dto/create-image.dto";

export class CreateCharacterDto {
    @ApiPropertyOptional({ type: () => CreateConfigDto })
    @IsOptional()
    @Type(() => CreateConfigDto)
    readonly config?: Partial<CreateConfigDto> = {
        puissName: null
    };

    @ApiPropertyOptional({ type: () => CreateEquipmentDto })
    @IsOptional()
    @Type(() => CreateEquipmentDto)
    readonly equipment?: Partial<CreateEquipmentDto> = {
        weapons: [],
        plastrons: [],
        shields: [],
        helmets: [],
        topClothes: [],
        gloves: [],
        botClothes: [],
        shoes: [],
        amulets: [],
        others: [],
    };

    @ApiPropertyOptional({ type: () => CreateFightStatsDto })
    @IsOptional()
    @Type(() => CreateFightStatsDto)
    readonly fight?: Partial<CreateFightStatsDto> = {
        agi: 0,
        att: 0,
        def: 0,
        stren: 0,
        vit: 0,
        puiss: 0,
        cac: 0,
        dist: 0,
        mag: 0,
        defPhy: 0,
        defMag: 0,
        dodge: 0,
    };

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly firstname?: string = '';

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly hp?: number = 0;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly hpMax?: number = 0;

    @ApiPropertyOptional({ type: () => CreateImageDto })
    @IsOptional()
    @Type(() => CreateImageDto)
    readonly image?: CreateImageDto = null;

    @ApiPropertyOptional({ type: () => [CreateInventoryItemDto] })
    @IsOptional()
    @Type(() => CreateInventoryItemDto)
    readonly inventory?: Partial<CreateInventoryItemDto>[] = [];

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly job?: string = '';

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly lastname?: string = '';

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly level?: number = 1;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly lore?: string = '';

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly notes?: string = '';

    @ApiPropertyOptional({ type: () => [CreateSkillItemDto] })
    @IsOptional()
    @Type(() => CreateSkillItemDto)
    readonly skills?: Partial<CreateSkillItemDto>[] = [];

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    readonly specie?: string;

    @ApiPropertyOptional({ type: () => CreateStatsDto })
    @IsOptional()
    @Type(() => CreateStatsDto)
    readonly stats?: Partial<CreateStatsDto> = {
        agi: 0,
        att: 0,
        char: 0,
        def: 0,
        luck: 0,
        obs: 0,
        prec: 0,
        pui: 0,
        stren:0,
        vit: 0,
        know: 0,
    };

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    readonly yearOld?: number = 0;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    readonly dead?: Boolean = false;

    @IsEmpty()
    readonly id?: string;
}