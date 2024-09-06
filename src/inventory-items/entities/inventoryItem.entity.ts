import {
    Column,
    JoinColumn,
    Entity,
    ManyToOne,
    ManyToMany,
    PrimaryGeneratedColumn,
    JoinTable,
} from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Character } from "../../characters/entities/character.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";

@Entity('inventory_items')
export class InventoryItem {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ApiProperty({ type: () => Character })
    @ManyToOne(() => Character, character => character.inventory, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({ name: 'character_id' })
    characterId!: Character;

    @ApiPropertyOptional({ type: Number, default: null })
    @Column({ nullable: true })
    stage?: number;

    @ApiProperty({ type: Number, default: null })
    @Column({ nullable: false })
    nb!: number;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '', nullable: false })
    carac?: string;

    @ApiProperty({ type: String, default: '' })
    @Column({ nullable: false })
    name!: string;

    @ApiProperty({ type: String })
    @Column({ nullable: false })
    type!: string;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ name: 'description', default: '', nullable: false })
    desc: string;

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.weapons)
    @JoinTable({
        name: 'link_inventory_items_equipments_weapons',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedWeapons?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.plastrons)
    @JoinTable({
        name: 'link_inventory_items_equipments_plastrons',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedPlastrons?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.shields)
    @JoinTable({
        name: 'link_inventory_items_equipments_shields',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedShields?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.helmets)
    @JoinTable({
        name: 'link_inventory_items_equipments_helmets',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedHelmets?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.gloves)
    @JoinTable({
        name: 'link_inventory_items_equipments_gloves',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedGloves?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.shoes)
    @JoinTable({
        name: 'link_inventory_items_equipments_shoes',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedShoes?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.topClothes)
    @JoinTable({
        name: 'link_inventory_items_equipments_top_clothes',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedTopClothes?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.botClothes)
    @JoinTable({
        name: 'link_inventory_items_equipments_bot_clothes',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedBotClothes?: Equipment[]

    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.amulets)
    @JoinTable({
        name: 'link_inventory_items_equipments_amulets',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedAmulets?: Equipment[]
    
    @ApiPropertyOptional({ type: () => [Equipment], default: [] })
    @ManyToMany(() => Equipment, eq => eq.others)
    @JoinTable({
        name: 'link_inventory_items_equipments_others',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    equipedOthers?: Equipment[]
}