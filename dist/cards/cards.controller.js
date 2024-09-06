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
exports.CardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cards_service_1 = require("./cards.service");
const create_card_dto_1 = require("./dto/create-card.dto");
const update_card_dto_1 = require("./dto/update-card.dto");
const card_entity_1 = require("./entities/card.entity");
let CardsController = class CardsController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    findAll() {
        return this.cardService.findAll();
    }
    findOne(id) {
        return this.cardService.findOne(id);
    }
    createCard(newCard) {
        return this.cardService.createCard(newCard);
    }
    updateCard(id, updateCard) {
        return this.cardService.updateCard(id, updateCard);
    }
    deleteCard(id) {
        return this.cardService.deleteCard(id);
    }
};
exports.CardsController = CardsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all cards' }),
    (0, swagger_1.ApiOkResponse)({ type: [card_entity_1.Card] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get card by id' }),
    (0, swagger_1.ApiOkResponse)({ type: card_entity_1.Card }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Card not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new Card' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Card created',
        type: card_entity_1.Card,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_dto_1.CreateCardDto]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "createCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update card by id' }),
    (0, swagger_1.ApiOkResponse)({ type: card_entity_1.Card }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Card not found' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_card_dto_1.UpdateCardDto]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "updateCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete card by id' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Deleted with success' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Card not found' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "deleteCard", null);
exports.CardsController = CardsController = __decorate([
    (0, swagger_1.ApiTags)('cards'),
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [cards_service_1.CardsService])
], CardsController);
//# sourceMappingURL=cards.controller.js.map