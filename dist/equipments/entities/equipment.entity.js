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
exports.Equipment = void 0;
const typeorm_1 = require("typeorm");
const inventoryItem_entity_1 = require("../../inventory-items/entities/inventoryItem.entity");
const character_entity_1 = require("../../characters/entities/character.entity");
let Equipment = class Equipment {
};
exports.Equipment = Equipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Equipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedWeapons, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "weapons", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedPlastrons, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "plastrons", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedShields, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "shields", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedHelmets, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "helmets", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedGloves, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "gloves", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedShoes, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "shoes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedTopClothes, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "topClothes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedBotClothes, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "botClothes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedAmulets, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "amulets", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => inventoryItem_entity_1.InventoryItem, it => it.equipedOthers, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Equipment.prototype, "others", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => character_entity_1.Character, character => character.equipment, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete'
    }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", character_entity_1.Character)
], Equipment.prototype, "characterId", void 0);
exports.Equipment = Equipment = __decorate([
    (0, typeorm_1.Entity)('equipments')
], Equipment);
//# sourceMappingURL=equipment.entity.js.map