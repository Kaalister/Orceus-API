import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ReferrerWhitelistMiddleware } from './referrer-whitelist/referrer-whitelist.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { CharactersModule } from './characters/characters.module';
import { ImagesModule } from './images/images.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'admin',
			password: '$7Z5UkCtOX]pE',
			database: 'orceus',
			entities: [
				'dist/**/*.entity{.ts,.js}',
			],
			synchronize: true,
		}),
		CardsModule,
		CharactersModule,
		ImagesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})

export class AppModule {
	configure(consumer: MiddlewareConsumer) {

		if (process.env.ENABLE_REFERRER_WHITELIST === 'true')
			consumer
				.apply(ReferrerWhitelistMiddleware)
				.forRoutes('*');
	}
}