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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const characters_service_1 = require("./characters.service");
const create_character_dto_1 = require("./dto/create-character.dto");
const update_character_dto_1 = require("./dto/update-character.dto");
const character_entity_1 = require("./entities/character.entity");
let CharactersController = class CharactersController {
    constructor(charactersService) {
        this.charactersService = charactersService;
    }
    findAll() {
        return this.charactersService.findAll();
    }
    findOne(id) {
        return this.charactersService.findOne(id);
    }
    createCharacter(character) {
        return this.charactersService.createCharacter(character);
    }
    updateCharacter(id, updatedCharacter) {
        return this.charactersService.updateCharacter(id, updatedCharacter);
    }
    deleteCharacter(id) {
        this.charactersService.deleteCharacter(id);
    }
};
exports.CharactersController = CharactersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all characters' }),
    (0, swagger_1.ApiOkResponse)({ type: [character_entity_1.Character] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get character by id' }),
    (0, swagger_1.ApiOkResponse)({ type: character_entity_1.Character }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Character not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create character' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Card created',
        type: character_entity_1.Character,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "createCharacter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update character by id' }),
    (0, swagger_1.ApiOkResponse)({ type: character_entity_1.Character }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Character not found' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_character_dto_1.UpdateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "updateCharacter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete character by id' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Delete with success' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Character not found' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "deleteCharacter", null);
exports.CharactersController = CharactersController = __decorate([
    (0, swagger_1.ApiTags)('characters'),
    (0, common_1.Controller)('characters'),
    __metadata("design:paramtypes", [characters_service_1.CharactersService])
], CharactersController);
//# sourceMappingURL=characters.controller.js.map