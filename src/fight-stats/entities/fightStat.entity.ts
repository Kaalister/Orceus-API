import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from "typeorm";
import { Character } from "../../characters/entities/character.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity('fight_stats')
export class FightStat {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ApiProperty({ type: () => Character })
    @OneToOne(() => Character, character => character.fight, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({ name: 'character_id' })
    characterId!: Character;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    agi?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    att?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    def?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    puiss?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    stren?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    vit?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    cac?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    dist?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    mag?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    defPhy?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    defMag?: number;

    @ApiPropertyOptional({ type: Number, default: 0 })
    @Column({ default: 0, nullable: false })
    dodge?: number;
}