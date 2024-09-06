import { Config } from "../../configs/entities/config.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";
import { FightStat } from "../../fight-stats/entities/fightStat.entity";
import { InventoryItem } from "../../inventory-items/entities/inventoryItem.entity";
import { Skill } from "../../skills/entities/skill.entity";
import { Stat } from "../../stats/entities/stat.entity";
import { Image } from "src/images/entities/image.entity";
export declare class Character {
    id: string;
    config: Config;
    equipment: Equipment;
    fight: FightStat;
    firstname?: string;
    hp?: number;
    hpMax?: number;
    image: Image;
    inventory?: InventoryItem[];
    job?: string;
    lastname?: string;
    level?: number;
    lore?: string;
    notes?: string;
    skills?: Skill[];
    specie?: string;
    stats?: Stat;
    yearOld?: number;
    dead?: Boolean;
}
