import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ReferrerWhitelistMiddleware implements NestMiddleware {
	private allowedReferrers: string[] = [
		'https://orceus.fr',
		'https://www.orceus.fr'
  	]

  	use(req: Request, res: Response, next: NextFunction) {
		const referrer = req.headers.referer || req.headers.referrer
		console.log('referrer', referrer)
		if (this.allowedReferrers.includes(referrer as string)) {
	  		next()
		} else {
			console.error('Access denied')
			res.status(403).send('Access denied')
		}
  	}
}