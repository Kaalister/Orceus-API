import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Stat } from '../stats/entities/stat.entity';
import { Config } from '../configs/entities/config.entity';
import { Equipment } from '../equipments/entities/equipment.entity';
import { InventoryItem } from '../inventory-items/entities/inventoryItem.entity';
import { Skill } from '../skills/entities/skill.entity';
import { FightStat } from '../fight-stats/entities/fightStat.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Character,
			Stat,
			FightStat,
			Config,
			Equipment,
			InventoryItem,
			Skill,
		])
	],
	controllers: [CharactersController],
	providers: [CharactersService]
})
export class CharactersModule {}
