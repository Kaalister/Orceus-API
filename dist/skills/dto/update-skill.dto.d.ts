import { CreateSkillItemDto } from "./create-skill.dto";
declare const UpdateSkillItemDto_base: import("@nestjs/common").Type<Pick<CreateSkillItemDto, "name" | "desc">>;
export declare class UpdateSkillItemDto extends UpdateSkillItemDto_base {
    readonly id: string;
}
export {};
