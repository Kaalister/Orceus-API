import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Config } from "../../configs/entities/config.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";
import { FightStat } from "../../fight-stats/entities/fightStat.entity";
import { InventoryItem } from "../../inventory-items/entities/inventoryItem.entity";
import { Skill } from "../../skills/entities/skill.entity";
import { Stat } from "../../stats/entities/stat.entity";
import { Image } from "src/images/entities/image.entity";

@Entity('characters')
export class Character {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @OneToOne(() => Config, config => config.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    config!: Config;

    @OneToOne(() => Equipment, eq => eq.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    equipment!: Equipment;

    @OneToOne(() => FightStat, fs => fs.characterId, {
        cascade: true,
        eager: true,
        nullable: false
    })
    fight!: FightStat;

    @Column({ default: '' })
    firstname?: string;

    @Column({ default: 0 })
    hp?: number;

    @Column({ name: 'hp_max', default: 0 })
    hpMax?: number;

    @OneToOne(() => Image, img => img.character, {
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    image: Image;

    @OneToMany(() => InventoryItem, item => item.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    inventory?: InventoryItem[];

    @Column({ default: '' })
    job?: string;

    @Column({ default: '' })
    lastname?: string;

    @Column({ default: 1 })
    level?: number;

    @Column({ default: '' })
    lore?: string;

    @Column({ default: '' })
    notes?: string;

    @OneToMany(() => Skill, skill => skill.characterId, {
        cascade: true,
        eager: true,
    })
    skills?: Skill[];

    @Column({ default: '' })
    specie?: string;

    @OneToOne(() => Stat, s => s.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    })
    stats?: Stat;

    @Column({ name: 'years_old', default: 0 })
    yearOld?: number;

    @Column({ default: false })
    dead?: Boolean;
}