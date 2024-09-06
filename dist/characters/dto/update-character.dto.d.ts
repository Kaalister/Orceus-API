import { CreateCharacterDto } from "./create-character.dto";
declare const UpdateCharacterDto_base: import("@nestjs/common").Type<Omit<CreateCharacterDto, "id">>;
export declare class UpdateCharacterDto extends UpdateCharacterDto_base {
    readonly id: string;
}
export {};
