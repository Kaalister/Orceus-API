"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersModule = void 0;
const common_1 = require("@nestjs/common");
const characters_controller_1 = require("./characters.controller");
const characters_service_1 = require("./characters.service");
const typeorm_1 = require("@nestjs/typeorm");
const character_entity_1 = require("./entities/character.entity");
const stat_entity_1 = require("../stats/entities/stat.entity");
const config_entity_1 = require("../configs/entities/config.entity");
const equipment_entity_1 = require("../equipments/entities/equipment.entity");
const inventoryItem_entity_1 = require("../inventory-items/entities/inventoryItem.entity");
const skill_entity_1 = require("../skills/entities/skill.entity");
const fightStat_entity_1 = require("../fight-stats/entities/fightStat.entity");
const images_service_1 = require("../images/images.service");
const image_entity_1 = require("../images/entities/image.entity");
let CharactersModule = class CharactersModule {
};
exports.CharactersModule = CharactersModule;
exports.CharactersModule = CharactersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                character_entity_1.Character,
                stat_entity_1.Stat,
                fightStat_entity_1.FightStat,
                config_entity_1.Config,
                equipment_entity_1.Equipment,
                inventoryItem_entity_1.InventoryItem,
                skill_entity_1.Skill,
                image_entity_1.Image,
            ])
        ],
        controllers: [characters_controller_1.CharactersController],
        providers: [
            characters_service_1.CharactersService,
            images_service_1.ImagesService,
        ]
    })
], CharactersModule);
//# sourceMappingURL=characters.module.js.map