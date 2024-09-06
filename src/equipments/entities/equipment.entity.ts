import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { InventoryItem } from "../../inventory-items/entities/inventoryItem.entity";
import { Character } from "../../characters/entities/character.entity";

@Entity('equipments')
export class Equipment { 
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ManyToMany(() => InventoryItem, it => it.equipedWeapons, {
        cascade: true,
        eager: true,
    })
    public weapons: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedPlastrons, {
        cascade: true,
        eager: true,
    })
    public plastrons: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedShields, {
        cascade: true,
        eager: true,
    })
    public shields: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedHelmets, {
        cascade: true,
        eager: true,
    })
    public helmets: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedGloves, {
        cascade: true,
        eager: true,
    })
    public gloves: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedShoes, {
        cascade: true,
        eager: true,
    })
    public shoes: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedTopClothes, {
        cascade: true,
        eager: true,
    })
    public topClothes: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedBotClothes, {
        cascade: true,
        eager: true,
    })
    public botClothes: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedAmulets, {
        cascade: true,
        eager: true,
    })
    public amulets: InventoryItem[];

    @ManyToMany(() => InventoryItem, it => it.equipedOthers, {
        cascade: true,
        eager: true,
    })
    public others: InventoryItem[];

    @OneToOne(() => Character, character => character.equipment, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete'
    })
    @JoinColumn({ name: 'character_id' })
    public characterId: Character;
}