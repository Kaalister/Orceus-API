import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ReferrerWhitelistMiddleware implements NestMiddleware {
	private allowedReferrerPatterns: RegExp[] = [
		/^https:\/\/www\.orceus\.fr\//,
		/^https?:\/\/localhost:3000\//,
	]
  
	use(req: Request, res: Response, next: NextFunction) {
		const referrer = (
			req.headers.referer || req.headers.referrer
		) as string | undefined
  
	  console.log('referrer', referrer)
  
	  if (referrer && this.allowedReferrerPatterns.some(pattern =>
		pattern.test(referrer)
	)) {
		next()
	  } else {
		console.error('Access denied')
		res.status(403).send('Access denied')
	  }
	}
}