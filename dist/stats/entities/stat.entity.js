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
exports.Stat = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const character_entity_1 = require("../../characters/entities/character.entity");
let Stat = class Stat {
};
exports.Stat = Stat;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Stat.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "agi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "att", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "char", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "def", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "luck", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "obs", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "prec", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "pui", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "stren", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "vit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], Stat.prototype, "know", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => character_entity_1.Character }),
    (0, typeorm_1.OneToOne)(() => character_entity_1.Character, character => character.stats, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", character_entity_1.Character)
], Stat.prototype, "characterId", void 0);
exports.Stat = Stat = __decorate([
    (0, typeorm_1.Entity)('stats')
], Stat);
//# sourceMappingURL=stat.entity.js.map