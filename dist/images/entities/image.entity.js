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
exports.Image = void 0;
const card_entity_1 = require("../../cards/entities/card.entity");
const typeorm_1 = require("typeorm");
const fs = require("fs");
const character_entity_1 = require("../../characters/entities/character.entity");
const swagger_1 = require("@nestjs/swagger");
let Image = class Image {
    afterRemove() {
        fs.unlink(`images/${this.filename}`, error => {
            if (error) {
                console.error({
                    message: `L'image n'a pas été supprimée : ${this.filename}`,
                    error: error
                });
            }
        });
    }
};
exports.Image = Image;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Image.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Image.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)({ name: 'original_name' }),
    __metadata("design:type", String)
], Image.prototype, "originalName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Image.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Date }),
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)"
    }),
    __metadata("design:type", Date)
], Image.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Date }),
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)"
    }),
    __metadata("design:type", Date)
], Image.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => card_entity_1.Card }),
    (0, typeorm_1.ManyToOne)(() => card_entity_1.Card, card => card.images, {
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({ name: 'card_id' }),
    __metadata("design:type", card_entity_1.Card)
], Image.prototype, "card", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [card_entity_1.Card] }),
    (0, typeorm_1.OneToMany)(() => card_entity_1.Card, card => card.mainImage),
    __metadata("design:type", Array)
], Image.prototype, "mainCards", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => character_entity_1.Character }),
    (0, typeorm_1.OneToMany)(() => character_entity_1.Character, charac => charac.image, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", character_entity_1.Character)
], Image.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Image.prototype, "afterRemove", null);
exports.Image = Image = __decorate([
    (0, typeorm_1.Entity)({ name: 'images' })
], Image);
//# sourceMappingURL=image.entity.js.map