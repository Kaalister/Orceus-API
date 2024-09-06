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
exports.CreateCharacterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_config_dto_1 = require("../../configs/dto/create-config.dto");
const create_equipment_dto_1 = require("../../equipments/dto/create-equipment.dto");
const create_fight_stats_dto_1 = require("../../fight-stats/dto/create-fight-stats.dto");
const create_inventory_item_dto_1 = require("../../inventory-items/dto/create-inventory-item.dto");
const create_skill_dto_1 = require("../../skills/dto/create-skill.dto");
const create_stats_dto_1 = require("../../stats/dto/create-stats.dto");
const create_image_dto_1 = require("../../images/dto/create-image.dto");
class CreateCharacterDto {
    constructor() {
        this.config = {
            puissName: null
        };
        this.equipment = {
            weapons: [],
            plastrons: [],
            shields: [],
            helmets: [],
            topClothes: [],
            gloves: [],
            botClothes: [],
            shoes: [],
            amulets: [],
            others: [],
        };
        this.fight = {
            agi: 0,
            att: 0,
            def: 0,
            stren: 0,
            vit: 0,
            puiss: 0,
            cac: 0,
            dist: 0,
            mag: 0,
            defPhy: 0,
            defMag: 0,
            dodge: 0,
        };
        this.firstname = '';
        this.hp = 0;
        this.hpMax = 0;
        this.image = null;
        this.inventory = [];
        this.job = '';
        this.lastname = '';
        this.level = 1;
        this.lore = '';
        this.notes = '';
        this.skills = [];
        this.stats = {
            agi: 0,
            att: 0,
            char: 0,
            def: 0,
            luck: 0,
            obs: 0,
            prec: 0,
            pui: 0,
            stren: 0,
            vit: 0,
            know: 0,
        };
        this.yearOld = 0;
        this.dead = false;
    }
}
exports.CreateCharacterDto = CreateCharacterDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: () => create_config_dto_1.CreateConfigDto
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_config_dto_1.CreateConfigDto),
    __metadata("design:type", Object)
], CreateCharacterDto.prototype, "config", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => create_equipment_dto_1.CreateEquipmentDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_equipment_dto_1.CreateEquipmentDto),
    __metadata("design:type", Object)
], CreateCharacterDto.prototype, "equipment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => create_fight_stats_dto_1.CreateFightStatsDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_fight_stats_dto_1.CreateFightStatsDto),
    __metadata("design:type", Object)
], CreateCharacterDto.prototype, "fight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCharacterDto.prototype, "hp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCharacterDto.prototype, "hpMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => create_image_dto_1.CreateImageDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_image_dto_1.CreateImageDto),
    __metadata("design:type", create_image_dto_1.CreateImageDto)
], CreateCharacterDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [create_inventory_item_dto_1.CreateInventoryItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_inventory_item_dto_1.CreateInventoryItemDto),
    __metadata("design:type", Array)
], CreateCharacterDto.prototype, "inventory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "job", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCharacterDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "lore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => [create_skill_dto_1.CreateSkillItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_skill_dto_1.CreateSkillItemDto),
    __metadata("design:type", Array)
], CreateCharacterDto.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "specie", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => create_stats_dto_1.CreateStatsDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => create_stats_dto_1.CreateStatsDto),
    __metadata("design:type", Object)
], CreateCharacterDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCharacterDto.prototype, "yearOld", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Boolean }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCharacterDto.prototype, "dead", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], CreateCharacterDto.prototype, "id", void 0);
//# sourceMappingURL=create-character.dto.js.map