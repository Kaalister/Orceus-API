import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Image } from "src/images/entities/image.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

@Entity('cards')
@Unique(['id'])
@Unique(['cardNum'])
export class Card {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ApiProperty({ type: () => [Image], default: [] })
    @OneToMany(() => Image, img => img.card, {
        cascade: true,
        eager: true,
    })
    images!: Image[];

    @ApiPropertyOptional({ type: () => Image, default: null })
    @ManyToOne(() => Image, img => img.mainCards, {
        cascade: true,
        onDelete: 'SET NULL',
        eager: true,
    })
    @JoinColumn({ name: 'main_image' })
    mainImage?: Image;

    @ApiProperty({ type: Number })
    @Column({ name: 'card_num', nullable: false })
    cardNum!: number;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ name: 'description', default: '' })
    desc?: string;

    @ApiProperty({ type: Boolean, default: false })
    @Column({ default: false })
    hidden!: boolean;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    name?: string;

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    specie?: string;

    @ApiPropertyOptional({ type: [String], default: [] })
    @Column('text', { array: true, default: [] })
    tags?: string[];

    @ApiPropertyOptional({ type: String, default: '' })
    @Column({ default: '' })
    type?: string;
}