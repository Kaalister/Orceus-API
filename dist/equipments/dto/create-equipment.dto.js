"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_inventory_item_dto_1 = require("../../inventory-items/dto/create-inventory-item.dto");
class CreateEquipmentDto {
    constructor() {
        this.weapons = [];
        this.plastrons = [];
        this.shields = [];
        this.helmets = [];
        this.gloves = [];
        this.shoes = [];
        this.topClothes = [];
        this.botClothes = [];
        this.amulets = [];
        this.others = [];
    }
}
exports.CreateEquipmentDto = CreateEquipmentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "weapons", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "plastrons", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "shields", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "helmets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "gloves", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "shoes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "topClothes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "botClothes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "amulets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateEquipmentDto.prototype, "others", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEquipmentDto.prototype, "id", void 0);
//# sourceMappingURL=create-equipment.dto.js.map