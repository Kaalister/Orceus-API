import {
    Column,
    JoinColumn,
    Entity,
    ManyToOne,
    ManyToMany,
    PrimaryGeneratedColumn,
    JoinTable,
} from "typeorm";
import { Character } from "../../characters/entities/character.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";

@Entity('inventory_items')
export class InventoryItem {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ManyToOne(() => Character, character => character.inventory, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({ name: 'character_id' })
    public characterId: string;

    @Column({ nullable: true })
    public stage: number;

    @Column({ nullable: false })
    public nb: number;

    @Column({ default: '', nullable: false })
    public carac: string;

    @Column({ nullable: false })
    public name: string;

    @Column({ nullable: false })
    public type: string;

    @Column({ name: 'description', default: '', nullable: false })
    public desc: string;

    @ManyToMany(() => Equipment, eq => eq.weapons)
    @JoinTable({
        name: 'link_inventory_items_equipments_weapons',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedWeapons: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.plastrons)
    @JoinTable({
        name: 'link_inventory_items_equipments_plastrons',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedPlastrons: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.shields)
    @JoinTable({
        name: 'link_inventory_items_equipments_shields',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedShields: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.helmets)
    @JoinTable({
        name: 'link_inventory_items_equipments_helmets',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedHelmets: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.gloves)
    @JoinTable({
        name: 'link_inventory_items_equipments_gloves',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedGloves: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.shoes)
    @JoinTable({
        name: 'link_inventory_items_equipments_shoes',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedShoes: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.topClothes)
    @JoinTable({
        name: 'link_inventory_items_equipments_top_clothes',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedTopClothes: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.botClothes)
    @JoinTable({
        name: 'link_inventory_items_equipments_bot_clothes',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedBotClothes: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.amulets)
    @JoinTable({
        name: 'link_inventory_items_equipments_amulets',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedAmulets: Equipment[]

    @ManyToMany(() => Equipment, eq => eq.others)
    @JoinTable({
        name: 'link_inventory_items_equipments_others',
        joinColumn: { name: 'id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id', referencedColumnName: 'id'}
    })
    public equipedOthers: Equipment[]
}