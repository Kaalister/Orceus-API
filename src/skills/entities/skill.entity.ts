import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Character } from "../../characters/entities/character.entity";

@Entity('skills')
export class Skill {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ManyToOne(() => Character, character => character.skills, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'character_id' })
    public characterId: string;

    @Column({ nullable: false })
    public name: string;

    @Column({name: 'description', nullable: false })
    public desc: string;
}