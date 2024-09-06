import { CreateInventoryItemDto } from "./create-inventory-item.dto";
declare const UpdateInventoryItemDto_base: import("@nestjs/common").Type<Omit<CreateInventoryItemDto, "id">>;
export declare class UpdateInventoryItemDto extends UpdateInventoryItemDto_base {
    readonly id: string;
}
export {};
