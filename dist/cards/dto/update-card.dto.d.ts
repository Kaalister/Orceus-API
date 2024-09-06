import { CreateCardDto } from './create-card.dto';
declare const UpdateCardDto_base: import("@nestjs/common").Type<Omit<CreateCardDto, "id">>;
export declare class UpdateCardDto extends UpdateCardDto_base {
    readonly id?: string;
}
export {};
