import { CreateImageDto } from "./create-image.dto";
declare const UpdateImageDto_base: import("@nestjs/common").Type<Omit<CreateImageDto, "id">>;
export declare class UpdateImageDto extends UpdateImageDto_base {
    readonly id: string;
}
export {};
