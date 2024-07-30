import { Module, MiddlewareConsumer } from '@nestjs/common'
import { ReferrerWhitelistMiddleware } from './referrer-whitelist/referrer-whitelist.middleware'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { User } from './users/user.entity'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'admin',
			password: '$7Z5UkCtOX]pE',
			database: 'orceus',
			entities: [User],
			synchronize: true,
		}),
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(ReferrerWhitelistMiddleware)
			.forRoutes('*'); // Apply to all routes, adjust if needed
	}
}