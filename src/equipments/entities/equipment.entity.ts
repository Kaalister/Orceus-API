import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { InventoryItem } from "../../inventory-items/entities/inventoryItem.entity";
import { Character } from "../../characters/entities/character.entity";

@Entity('equipments')
export class Equipment {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedWeapons, {
        cascade: true,
        eager: true,
    })
    public weapons?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedPlastrons, {
        cascade: true,
        eager: true,
    })
    public plastrons?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedShields, {
        cascade: true,
        eager: true,
    })
    public shields?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedHelmets, {
        cascade: true,
        eager: true,
    })
    public helmets?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedGloves, {
        cascade: true,
        eager: true,
    })
    public gloves?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedShoes, {
        cascade: true,
        eager: true,
    })
    public shoes?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedTopClothes, {
        cascade: true,
        eager: true,
    })
    public topClothes?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedBotClothes, {
        cascade: true,
        eager: true,
    })
    public botClothes?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedAmulets, {
        cascade: true,
        eager: true,
    })
    public amulets?: InventoryItem[];

    @ApiProperty({ type: () => [InventoryItem], default: [] })
    @ManyToMany(() => InventoryItem, it => it.equipedOthers, {
        cascade: true,
        eager: true,
    })
    public others?: InventoryItem[];

    @ApiProperty({ type: () => Character })
    @OneToOne(() => Character, character => character.equipment, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete'
    })
    @JoinColumn({ name: 'character_id' })
    public characterId!: Character;
}