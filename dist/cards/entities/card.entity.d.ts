import { Image } from "src/images/entities/image.entity";
export declare class Card {
    id: string;
    images: Image[];
    mainImage: Image;
    cardNum: number;
    desc: string;
    hidden: boolean;
    name: string;
    specie: string;
    tags: string[];
    type: string;
}
