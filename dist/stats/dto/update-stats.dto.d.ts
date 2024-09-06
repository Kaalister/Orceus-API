import { CreateStatsDto } from "./create-stats.dto";
declare const UpdateStatsDto_base: import("@nestjs/common").Type<Omit<CreateStatsDto, "id">>;
export declare class UpdateStatsDto extends UpdateStatsDto_base {
    readonly id: string;
}
export {};
