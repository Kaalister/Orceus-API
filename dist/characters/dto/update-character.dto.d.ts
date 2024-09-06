import { CreateCharacterDto } from "./create-character.dto";
declare const UpdateCharacterDto_base: import("@nestjs/common").Type<Pick<CreateCharacterDto, "config" | "equipment" | "fight" | "firstname" | "hp" | "hpMax" | "image" | "inventory" | "job" | "lastname" | "level" | "lore" | "notes" | "skills" | "specie" | "stats" | "yearOld" | "dead">>;
export declare class UpdateCharacterDto extends UpdateCharacterDto_base {
    readonly id: string;
}
export {};
