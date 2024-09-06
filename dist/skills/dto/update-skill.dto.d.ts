import { CreateSkillItemDto } from "./create-skill.dto";
declare const UpdateSkillItemDto_base: import("@nestjs/common").Type<Omit<CreateSkillItemDto, "id">>;
export declare class UpdateSkillItemDto extends UpdateSkillItemDto_base {
    readonly id: string;
}
export {};
