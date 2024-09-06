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
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToMany(() => Image, img => img.card, {
        cascade: true,
        eager: true,
    })
    images: Image[];

    @ManyToOne(() => Image, img => img.mainCards, {
        cascade: true,
        onDelete: 'SET NULL',
        eager: true,
    })
    @JoinColumn({ name: 'main_image' })
    mainImage: Image;

    @Column({ name: 'card_num', nullable: false })
    cardNum: number;

    @Column({ name: 'description', default: '' })
    desc: string;

    @Column({ default: false })
    hidden: boolean;

    @Column({ default: '' })
    name: string;

    @Column({ default: '' })
    specie: string;

    @Column('text', { array: true, default: [] })
    tags: string[];

    @Column({ default: '' })
    type: string;
}