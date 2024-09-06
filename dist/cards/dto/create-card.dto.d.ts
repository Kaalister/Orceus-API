import { CreateImageDto } from 'src/images/dto/create-image.dto';
export declare class CreateCardDto {
    readonly images?: CreateImageDto[];
    readonly mainImage?: CreateImageDto;
    readonly cardNum?: number;
    readonly desc?: string;
    readonly hidden?: boolean;
    readonly name?: string;
    readonly specie?: string;
    readonly tags?: string[];
    readonly type?: string;
    readonly id?: string;
}
