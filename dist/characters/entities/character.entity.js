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
exports.Character = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const config_entity_1 = require("../../configs/entities/config.entity");
const equipment_entity_1 = require("../../equipments/entities/equipment.entity");
const fightStat_entity_1 = require("../../fight-stats/entities/fightStat.entity");
const inventoryItem_entity_1 = require("../../inventory-items/entities/inventoryItem.entity");
const skill_entity_1 = require("../../skills/entities/skill.entity");
const stat_entity_1 = require("../../stats/entities/stat.entity");
const image_entity_1 = require("../../images/entities/image.entity");
let Character = class Character {
};
exports.Character = Character;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Character.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => config_entity_1.Config }),
    (0, typeorm_1.OneToOne)(() => config_entity_1.Config, config => config.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", config_entity_1.Config)
], Character.prototype, "config", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => equipment_entity_1.Equipment }),
    (0, typeorm_1.OneToOne)(() => equipment_entity_1.Equipment, eq => eq.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", equipment_entity_1.Equipment)
], Character.prototype, "equipment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => fightStat_entity_1.FightStat }),
    (0, typeorm_1.OneToOne)(() => fightStat_entity_1.FightStat, fs => fs.characterId, {
        cascade: true,
        eager: true,
        nullable: false
    }),
    __metadata("design:type", fightStat_entity_1.FightStat)
], Character.prototype, "fight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Character.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "hp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ name: 'hp_max', default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "hpMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => image_entity_1.Image }),
    (0, typeorm_1.ManyToOne)(() => image_entity_1.Image, img => img.character, {
        cascade: true,
        onDelete: 'SET NULL',
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", image_entity_1.Image)
], Character.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [inventoryItem_entity_1.InventoryItem], default: [] }),
    (0, typeorm_1.OneToMany)(() => inventoryItem_entity_1.InventoryItem, item => item.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", Array)
], Character.prototype, "inventory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Character.prototype, "job", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Character.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 1 }),
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Character.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Character.prototype, "lore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Character.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [skill_entity_1.Skill] }),
    (0, typeorm_1.OneToMany)(() => skill_entity_1.Skill, skill => skill.characterId, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Character.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, default: '' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Character.prototype, "specie", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => stat_entity_1.Stat }),
    (0, typeorm_1.OneToOne)(() => stat_entity_1.Stat, s => s.characterId, {
        cascade: true,
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", stat_entity_1.Stat)
], Character.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ name: 'years_old', default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "yearOld", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Boolean, default: false }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Character.prototype, "dead", void 0);
exports.Character = Character = __decorate([
    (0, typeorm_1.Entity)('characters'),
    (0, typeorm_1.Unique)(['id'])
], Character);
//# sourceMappingURL=character.entity.js.map