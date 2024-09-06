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
exports.InventoryItem = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const character_entity_1 = require("../../characters/entities/character.entity");
const equipment_entity_1 = require("../../equipments/entities/equipment.entity");
let InventoryItem = class InventoryItem {
};
exports.InventoryItem = InventoryItem;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], InventoryItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => character_entity_1.Character }),
    (0, typeorm_1.ManyToOne)(() => character_entity_1.Character, character => character.inventory, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", character_entity_1.Character)
], InventoryItem.prototype, "characterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: null }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InventoryItem.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, default: null }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], InventoryItem.prototype, "nb", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '', nullable: false }),
    __metadata("design:type", String)
], InventoryItem.prototype, "carac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], InventoryItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], InventoryItem.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ name: 'description', default: '', nullable: false }),
    __metadata("design:type", String)
], InventoryItem.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.weapons),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_weapons',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedWeapons", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.plastrons),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_plastrons',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedPlastrons", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.shields),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_shields',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedShields", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.helmets),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_helmets',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedHelmets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.gloves),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_gloves',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedGloves", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.shoes),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_shoes',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedShoes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.topClothes),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_top_clothes',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedTopClothes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.botClothes),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_bot_clothes',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedBotClothes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.amulets),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_amulets',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedAmulets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [equipment_entity_1.Equipment], default: [] }),
    (0, typeorm_1.ManyToMany)(() => equipment_entity_1.Equipment, eq => eq.others),
    (0, typeorm_1.JoinTable)({
        name: 'link_inventory_items_equipments_others',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], InventoryItem.prototype, "equipedOthers", void 0);
exports.InventoryItem = InventoryItem = __decorate([
    (0, typeorm_1.Entity)('inventory_items')
], InventoryItem);
//# sourceMappingURL=inventoryItem.entity.js.map