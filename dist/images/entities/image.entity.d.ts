import { Card } from 'src/cards/entities/card.entity';
import { Character } from 'src/characters/entities/character.entity';
export declare class Image {
    id: string;
    filename: string;
    originalName: string;
    size: number;
    created_at: Date;
    updated_at: Date;
    card: Card;
    mainCards: Card[];
    character: Character;
    afterRemove(): void;
}
