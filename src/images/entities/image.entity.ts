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
    OneToOne,
} from 'typeorm';
import * as fs from 'fs';
import { Character } from 'src/characters/entities/character.entity';

@Entity({ name: 'images' })
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    filename: string;

    @Column({ name: 'original_name'})
    originalName: string;

    @Column()
    size: number;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    created_at: Date;

    @UpdateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)"
    })
    updated_at: Date;

    @ManyToOne(() => Card, card => card.images, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'card_id' })
    card: Card;

    @OneToMany(() => Card, card => card.mainImage)
    mainCards: Card[];

    @OneToOne(() => Character, charac => charac.image, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'character_id' })
    character: Character;

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
