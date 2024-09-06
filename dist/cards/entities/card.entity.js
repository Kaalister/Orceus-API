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
exports.Card = void 0;
const image_entity_1 = require("../../images/entities/image.entity");
const typeorm_1 = require("typeorm");
let Card = class Card {
};
exports.Card = Card;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Card.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => image_entity_1.Image, img => img.card, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Card.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => image_entity_1.Image, img => img.mainCards, {
        cascade: true,
        onDelete: 'SET NULL',
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'main_image' }),
    __metadata("design:type", image_entity_1.Image)
], Card.prototype, "mainImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'card_num', nullable: false }),
    __metadata("design:type", Number)
], Card.prototype, "cardNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', default: '' }),
    __metadata("design:type", String)
], Card.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Card.prototype, "hidden", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "specie", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, default: [] }),
    __metadata("design:type", Array)
], Card.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "type", void 0);
exports.Card = Card = __decorate([
    (0, typeorm_1.Entity)('cards'),
    (0, typeorm_1.Unique)(['id']),
    (0, typeorm_1.Unique)(['cardNum'])
], Card);
//# sourceMappingURL=card.entity.js.map