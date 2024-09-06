import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Character } from "../../characters/entities/character.entity";

@Entity('configs')
export class Config {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty({ type: () => Character })
    @OneToOne(() => Character, character => character.config, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'character_id' })
    characterId!: Character;

    @ApiPropertyOptional({ type: String })
    @Column({ default: null, nullable: true })
    puissName: string;
}