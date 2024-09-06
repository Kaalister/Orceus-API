import { Equipment } from "../../equipments/entities/equipment.entity";
export declare class InventoryItem {
    id: string;
    characterId: string;
    stage: number;
    nb: number;
    carac: string;
    name: string;
    type: string;
    desc: string;
    equipedWeapons: Equipment[];
    equipedPlastrons: Equipment[];
    equipedShields: Equipment[];
    equipedHelmets: Equipment[];
    equipedGloves: Equipment[];
    equipedShoes: Equipment[];
    equipedTopClothes: Equipment[];
    equipedBotClothes: Equipment[];
    equipedAmulets: Equipment[];
    equipedOthers: Equipment[];
}
