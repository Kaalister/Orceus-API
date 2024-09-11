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

	app.useStaticAssets(join(homedir(), 'images'), {
		prefix: '/images/',
	});

	app.enableCors({
		origin: '*',
		methods: 'GET,POST,PUT,DELETE,OPTIONS',
		allowedHeaders: 'Content-Type,Authorization',
	});

	await app.listen(3000);
}

bootstrap();
