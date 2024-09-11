import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { homedir } from 'os';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	const config = new DocumentBuilder()
    	.setTitle('Orceus Api')
		.setVersion('1.0')
    	.build();
	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api', app, document);

	app.enableCors({
		origin: ['http://localhost:3000', 'http://www.orceus.fr'],
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
		allowedHeaders: 'Content-Type, Authorization',
	});

	app.useStaticAssets(join(homedir(), 'images'), {
		prefix: '/images/',
	});

	await app.listen(3000);
}

bootstrap();
