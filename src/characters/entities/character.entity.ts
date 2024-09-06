import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
} from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Config } from "../../configs/entities/config.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";
import { FightStat } from "../../fight-stats/entities/fightStat.entity";
import { InventoryItem } from "../../inventory-items/entities/inventoryItem.entity";
import { Skill } from "../../skills/entities/skill.entity";
import { Stat } from "../../stats/entities/stat.entity";
import { Image } from "src/images/entities/image.entity";

@Entity('characters')
@Unique(['id']) 
export class Character {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ApiProperty({ type: () => Config })
    @OneToOne(() => Config, config => config.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    config!: Config;

    @ApiProperty({ type: () => Equipment })
    @OneToOne(() => Equipment, eq => eq.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    equipment!: Equipment;

    @ApiProperty({ type: () => FightStat })
    @OneToOne(() => FightStat, fs => fs.characterId, {
        cascade: true,
        eager: true,
        nullable: false
    })
    fight!: FightStat;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    firstname?: string;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0 })
    hp?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ name: 'hp_max', default: 0 })
    hpMax?: number;

    @ApiPropertyOptional({ type: () => Image })
    @ManyToOne(() => Image, img => img.character, {
        cascade: true,
        onDelete: 'SET NULL',
        eager: true,
    })
    @JoinColumn()
    image?: Image;

    @ApiPropertyOptional({ type: () => [InventoryItem], default: [] })
    @OneToMany(() => InventoryItem, item => item.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    inventory?: InventoryItem[];

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    job?: string;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    lastname?: string;

    @ApiPropertyOptional({ type: Number, default: 1 })
    @Column({ default: 1 })
    level?: number;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    lore?: string;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    notes?: string;

    @ApiPropertyOptional({ type: () => [Skill] })
    @OneToMany(() => Skill, skill => skill.characterId, {
        cascade: true,
        eager: true,
    })
    skills?: Skill[];

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    specie?: string;

    @ApiPropertyOptional({ type: () => Stat })
    @OneToOne(() => Stat, s => s.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    stats?: Stat;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ name: 'years_old', default: 0 })
    yearOld?: number;

    @ApiPropertyOptional({ type: Boolean, default: false })
    @Column({ default: false })
    dead?: Boolean;
}