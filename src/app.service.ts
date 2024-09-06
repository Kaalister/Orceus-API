import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AppService {
	async login(password: string) {
		console.log(password)
		const isAdmin = await bcrypt.compare(password, process.env.ADMIN_PWD);
		const isUser = await bcrypt.compare(password, process.env.USER_PWD);
		const isVisitor = await bcrypt.compare(password, process.env.VISITOR_PWD);
		
		if (isAdmin) {
			return {
				password: password,
				connected: true,
				sessionType: '09c71624'
			}
		}

		if (isUser) {
			return {
				password: password,
				connected: true,
				sessionType: '82ffd305'
			}
		}

		if (isVisitor) {
			return {
				password: password,
				connected: true,
				sessionType: 'a238a5dd'
			}
		}

		throw new UnauthorizedException()
	}
}
