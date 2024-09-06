import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Character } from "../../characters/entities/character.entity";

@Entity('skills')
export class Skill {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ApiProperty({ type: () => Character })
    @ManyToOne(() => Character, character => character.skills, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'character_id' })
    characterId!: Character;

    @ApiProperty({ type: String })
    @Column({ nullable: false })
    name!: string;

    @ApiProperty({ type: String })
    @Column({name: 'description', nullable: false })
    desc!: string;
}