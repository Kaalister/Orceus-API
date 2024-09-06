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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const card_entity_1 = require("./entities/card.entity");
const images_service_1 = require("../images/images.service");
let CardsService = class CardsService {
    constructor(cardRepository, imagesService) {
        this.cardRepository = cardRepository;
        this.imagesService = imagesService;
    }
    findAll() {
        return this.cardRepository.find();
    }
    findOne(id) {
        return this.cardRepository.findOneBy({ id });
    }
    createCard(card) {
        const cardEntity = (0, class_transformer_1.plainToInstance)(card_entity_1.Card, card);
        return this.cardRepository.save(cardEntity);
    }
    async updateCard(id, updatedCard) {
        const currentCard = await this.cardRepository.findOneBy({ id });
        if (!currentCard) {
            throw new common_1.NotFoundException(`The card with the id : ${id} is not found`);
        }
        await this.cardRepository.save(this.cardRepository.create({
            ...currentCard,
            ...updatedCard
        }));
        return this.cardRepository.findOneBy({ id });
    }
    async deleteCard(id) {
        const card = await this.cardRepository.findOneBy({ id });
        if (!card)
            throw new common_1.NotFoundException(`The card with the id : ${id} is not found`);
        const images = card.images;
        if (card.mainImage)
            images.push(card.mainImage);
        images.forEach(image => {
            this.imagesService.deleteImage(image.id);
        });
        return this.cardRepository.delete({ id });
    }
};
exports.CardsService = CardsService;
exports.CardsService = CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.Card)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        images_service_1.ImagesService])
], CardsService);
//# sourceMappingURL=cards.service.js.map