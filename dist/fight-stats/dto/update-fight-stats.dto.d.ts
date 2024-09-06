import { CreateFightStatsDto } from "./create-fight-stats.dto";
declare const UpdateFightStatsDto_base: import("@nestjs/common").Type<Pick<CreateFightStatsDto, "agi" | "att" | "def" | "puiss" | "stren" | "vit" | "cac" | "dist" | "mag" | "defPhy" | "defMag" | "dodge">>;
export declare class UpdateFightStatsDto extends UpdateFightStatsDto_base {
    readonly id: string;
}
export {};
