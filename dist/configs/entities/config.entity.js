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
exports.Config = void 0;
const typeorm_1 = require("typeorm");
const character_entity_1 = require("../../characters/entities/character.entity");
let Config = class Config {
};
exports.Config = Config;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Config.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => character_entity_1.Character, character => character.config, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", character_entity_1.Character)
], Config.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null, nullable: true }),
    __metadata("design:type", String)
], Config.prototype, "puissName", void 0);
exports.Config = Config = __decorate([
    (0, typeorm_1.Entity)('configs')
], Config);
//# sourceMappingURL=config.entity.js.map