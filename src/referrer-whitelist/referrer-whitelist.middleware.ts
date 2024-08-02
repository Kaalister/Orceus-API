import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ReferrerWhitelistMiddleware implements NestMiddleware {
	private allowedReferrerPatterns: RegExp[] = [
		/^https:\/\/www\.orceus\.fr\//,
		/^https?:\/\/localhost:3000\//,
	]
  
	private allowedIPs: string[] = [
		'84.100.220.90',
	]
  
	use(req: Request, res: Response, next: NextFunction) {
		const referrer = (
			req.headers.referer || req.headers.referrer
		) as string | undefined
		const ip = req.ip || req.connection.remoteAddress;
  
	  console.log('referrer', referrer)
	  console.log('ip', ip)
  
	  if (
		(referrer && this.allowedReferrerPatterns.some(pattern =>
			pattern.test(referrer)
		)) || (ip && this.allowedIPs.includes(ip))
	  ) {
		next();
	  } else {
		console.error('Access denied');
		res.status(403).send('Access denied');
	  }
	}
}