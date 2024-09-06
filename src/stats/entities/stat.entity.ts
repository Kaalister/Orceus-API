import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Character } from "../../characters/entities/character.entity";

@Entity('stats')
export class Stat {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    agi?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    att?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    char?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    def?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    luck?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    obs?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    prec?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    pui?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    stren?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    vit?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    know?: number;

    @ApiProperty({ type: () => Character })
    @OneToOne(() => Character, character => character.stats, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({ name: 'character_id' })
    characterId!: Character;
}