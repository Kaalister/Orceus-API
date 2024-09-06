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
exports.CreateFightStatsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFightStatsDto {
    constructor() {
        this.agi = 0;
        this.att = 0;
        this.def = 0;
        this.stren = 0;
        this.vit = 0;
        this.puiss = 0;
        this.cac = 0;
        this.dist = 0;
        this.mag = 0;
        this.defPhy = 0;
        this.defMag = 0;
        this.dodge = 0;
    }
}
exports.CreateFightStatsDto = CreateFightStatsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "agi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "att", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "def", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "stren", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "vit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "puiss", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "cac", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "dist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "mag", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "defPhy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "defMag", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFightStatsDto.prototype, "dodge", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], CreateFightStatsDto.prototype, "id", void 0);
//# sourceMappingURL=create-fight-stats.dto.js.map