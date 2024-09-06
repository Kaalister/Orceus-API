import { InventoryItem } from "../../inventory-items/entities/inventoryItem.entity";
import { Character } from "../../characters/entities/character.entity";
export declare class Equipment {
    id: string;
    weapons: InventoryItem[];
    plastrons: InventoryItem[];
    shields: InventoryItem[];
    helmets: InventoryItem[];
    gloves: InventoryItem[];
    shoes: InventoryItem[];
    topClothes: InventoryItem[];
    botClothes: InventoryItem[];
    amulets: InventoryItem[];
    others: InventoryItem[];
    characterId: Character;
}
