import { Controller, Get, Put, Body} from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Put('login')
	login(@Body('password') password: string): Object {
		return this.appService.login(password);
	}
}
