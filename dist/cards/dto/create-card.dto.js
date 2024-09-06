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
exports.CreateCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_image_dto_1 = require("../../images/dto/create-image.dto");
class CreateCardDto {
    constructor() {
        this.images = [];
        this.mainImage = null;
        this.desc = '';
        this.hidden = false;
        this.name = '';
        this.specie = '';
        this.tags = [];
    }
}
exports.CreateCardDto = CreateCardDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: () => [create_image_dto_1.CreateImageDto],
        example: '[123e4567-e89b-12d3-a456-426614174000, 123e4567-e89b-12d3-a456-426614174000]'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_image_dto_1.CreateImageDto),
    __metadata("design:type", Array)
], CreateCardDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_image_dto_1.CreateImageDto),
    __metadata("design:type", create_image_dto_1.CreateImageDto)
], CreateCardDto.prototype, "mainImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        example: 1
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreateCardDto.prototype, "cardNum", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: 'Voici une description'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: Boolean
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCardDto.prototype, "hidden", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: 'toto'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "specie", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCardDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "id", void 0);
//# sourceMappingURL=create-card.dto.js.map