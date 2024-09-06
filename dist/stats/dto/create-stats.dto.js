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
exports.CreateStatsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStatsDto {
    constructor() {
        this.agi = 0;
        this.att = 0;
        this.char = 0;
        this.def = 0;
        this.luck = 0;
        this.obs = 0;
        this.prec = 0;
        this.pui = 0;
        this.stren = 0;
        this.vit = 0;
        this.know = 0;
    }
}
exports.CreateStatsDto = CreateStatsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "agi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "att", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "char", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "def", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "luck", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "obs", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "prec", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "pui", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "stren", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "vit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStatsDto.prototype, "know", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], CreateStatsDto.prototype, "id", void 0);
//# sourceMappingURL=create-stats.dto.js.map