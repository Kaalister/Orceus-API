import { Card } from 'src/cards/entities/card.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
    AfterRemove,
} from 'typeorm';
import * as fs from 'fs';
import { Character } from 'src/characters/entities/character.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity({ name: 'images' })
export class Image {
    @ApiProperty({ type: String })
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ApiProperty({ type: String })
    @Column()
    filename!: string;

    @ApiProperty({ type: String })
    @Column({ name: 'original_name'})
    originalName!: string;

    @ApiProperty({ type: Number })
    @Column()
    size!: number;

    @ApiPropertyOptional({ type: Date })
    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    created_at?: Date;

    @ApiPropertyOptional({ type: Date })
    @UpdateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)"
    })
    updated_at?: Date;

    @ApiPropertyOptional({ type: () => Card })
    @ManyToOne(() => Card, card => card.images, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'card_id' })
    card?: Card;

    @ApiPropertyOptional({ type: () => [Card] })
    @OneToMany(() => Card, card => card.mainImage)
    mainCards?: Card[];

    @ApiPropertyOptional({ type: () => Character })
    @OneToMany(() => Character, charac => charac.image, {
        onDelete: 'CASCADE',
    })
    character?: Character;

    @AfterRemove()
    afterRemove() {
        fs.unlink(`images/${this.filename}`, error => {
            if (error) {
                console.error({
                    message: `L'image n'a pas été supprimée : ${this.filename}`,
                    error: error
                });
            }
        })
    }
}
