import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Character } from "../../characters/entities/character.entity";

@Entity('stats')
export class Stat {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ default: 0, nullable: false })
    public agi: number;

    @Column({ default: 0, nullable: false })
    public att: number;

    @Column({ default: 0, nullable: false })
    public char: number;

    @Column({ default: 0, nullable: false })
    public def: number;

    @Column({ default: 0, nullable: false })
    public luck: number;

    @Column({ default: 0, nullable: false })
    public obs: number;

    @Column({ default: 0, nullable: false })
    public prec: number;

    @Column({ default: 0, nullable: false })
    public pui: number;

    @Column({ default: 0, nullable: false })
    public stren: number;

    @Column({ default: 0, nullable: false })
    public vit: number;

    @Column({ default: 0, nullable: false })
    public know: number;

    @OneToOne(() => Character, character => character.stats, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({ name: 'character_id' })
    public characterId: Character;
}