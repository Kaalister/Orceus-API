import { CreateConfigDto } from "./create-config.dto";
declare const UpdateConfigDto_base: import("@nestjs/common").Type<Pick<CreateConfigDto, "puissName">>;
export declare class UpdateConfigDto extends UpdateConfigDto_base {
    readonly id: string;
}
export {};
