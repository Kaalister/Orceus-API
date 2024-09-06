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
exports.FightStat = void 0;
const typeorm_1 = require("typeorm");
const character_entity_1 = require("../../characters/entities/character.entity");
let FightStat = class FightStat {
};
exports.FightStat = FightStat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], FightStat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => character_entity_1.Character, character => character.fight, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", character_entity_1.Character)
], FightStat.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "agi", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "att", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "def", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "puiss", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "stren", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "vit", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "cac", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "dist", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "mag", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "defPhy", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "defMag", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false }),
    __metadata("design:type", Number)
], FightStat.prototype, "dodge", void 0);
exports.FightStat = FightStat = __decorate([
    (0, typeorm_1.Entity)('fight_stats')
], FightStat);
//# sourceMappingURL=fightStat.entity.js.map