import { CreateFightStatsDto } from "./create-fight-stats.dto";
declare const UpdateFightStatsDto_base: import("@nestjs/common").Type<Omit<CreateFightStatsDto, "id">>;
export declare class UpdateFightStatsDto extends UpdateFightStatsDto_base {
    readonly id: string;
}
export {};
