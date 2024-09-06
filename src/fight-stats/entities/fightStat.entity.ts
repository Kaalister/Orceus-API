import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from "typeorm";
import { Character } from "../../characters/entities/character.entity";

@Entity('fight_stats')
export class FightStat {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Character, character => character.fight, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({ name: 'character_id' })
    public characterId: Character;

    @Column({ default: 0, nullable: false })
    public agi: number;

    @Column({ default: 0, nullable: false })
    public att: number;

    @Column({ default: 0, nullable: false })
    public def: number;

    @Column({ default: 0, nullable: false })
    public puiss: number;

    @Column({ default: 0, nullable: false })
    public stren: number;

    @Column({ default: 0, nullable: false })
    public vit: number;

    @Column({ default: 0, nullable: false })
    public cac: number;

    @Column({ default: 0, nullable: false })
    public dist: number;

    @Column({ default: 0, nullable: false })
    public mag: number;

    @Column({ default: 0, nullable: false })
    public defPhy: number;

    @Column({ default: 0, nullable: false })
    public defMag: number;

    @Column({ default: 0, nullable: false })
    public dodge: number;
}