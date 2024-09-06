import {
	Controller,
	Put,
	Get,
	Body,
} from '@nestjs/common'
import { 
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service'

@ApiTags('login')
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	test() {
		return {
			message: 'test success'
		}
	}

	@ApiOperation({ description: 'Login to the app' })
	@ApiOkResponse({
		example: {
			password: 'myPassword',
			connected: true,
			sessionType: '0000001',
		}
	})
	@ApiUnauthorizedResponse({
		description: 'Unauthorized'
	})
	@Put('login')
	login(@Body('password') password: string): Object {
		return this.appService.login(password);
	}
}
