import { CreateEquipmentDto } from "./create-equipment.dto";
declare const UpdateEquipmentDto_base: import("@nestjs/common").Type<Omit<CreateEquipmentDto, "id">>;
export declare class UpdateEquipmentDto extends UpdateEquipmentDto_base {
    readonly id: string;
}
export {};
