import { CreateInventoryItemDto } from "./create-inventory-item.dto";
declare const UpdateInventoryItemDto_base: import("@nestjs/common").Type<Pick<CreateInventoryItemDto, "nb" | "name" | "type" | "stage" | "carac" | "desc">>;
export declare class UpdateInventoryItemDto extends UpdateInventoryItemDto_base {
    id: string;
}
export {};
