import { CreateConfigDto } from "../../configs/dto/create-config.dto";
import { CreateEquipmentDto } from "../../equipments/dto/create-equipment.dto";
import { CreateFightStatsDto } from "../../fight-stats/dto/create-fight-stats.dto";
import { CreateInventoryItemDto } from "../../inventory-items/dto/create-inventory-item.dto";
import { CreateSkillItemDto } from "../../skills/dto/create-skill.dto";
import { CreateStatsDto } from "../../stats/dto/create-stats.dto";
import { CreateImageDto } from "src/images/dto/create-image.dto";
export declare class CreateCharacterDto {
    readonly config?: Partial<CreateConfigDto>;
    readonly equipment?: Partial<CreateEquipmentDto>;
    readonly fight?: Partial<CreateFightStatsDto>;
    readonly firstname?: string;
    readonly hp?: number;
    readonly hpMax?: number;
    readonly image?: CreateImageDto;
    readonly inventory?: Partial<CreateInventoryItemDto>[];
    readonly job?: string;
    readonly lastname?: string;
    readonly level?: number;
    readonly lore?: string;
    readonly notes?: string;
    readonly skills?: Partial<CreateSkillItemDto>[];
    readonly specie?: string;
    readonly stats?: Partial<CreateStatsDto>;
    readonly yearOld?: number;
    readonly dead?: Boolean;
    readonly id?: string;
}
