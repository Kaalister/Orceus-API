import { CreateEquipmentDto } from "./create-equipment.dto";
declare const UpdateEquipmentDto_base: import("@nestjs/common").Type<Pick<CreateEquipmentDto, "weapons" | "plastrons" | "shields" | "helmets" | "gloves" | "shoes" | "topClothes" | "botClothes" | "amulets" | "others">>;
export declare class UpdateEquipmentDto extends UpdateEquipmentDto_base {
    readonly id: string;
}
export {};
