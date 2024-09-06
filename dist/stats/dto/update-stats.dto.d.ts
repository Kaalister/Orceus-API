import { CreateStatsDto } from "./create-stats.dto";
declare const UpdateStatsDto_base: import("@nestjs/common").Type<Pick<CreateStatsDto, "agi" | "att" | "def" | "stren" | "vit" | "char" | "luck" | "obs" | "prec" | "pui" | "know">>;
export declare class UpdateStatsDto extends UpdateStatsDto_base {
    readonly id?: string;
}
export {};
