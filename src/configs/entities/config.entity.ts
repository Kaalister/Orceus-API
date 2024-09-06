import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { Character } from "../../characters/entities/character.entity";

@Entity('configs')
export class Config {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @OneToOne(() => Character, character => character.config, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'character_id' })
    public characterId: Character;

    @Column({ default: null, nullable: true })
    public puissName: string;
}