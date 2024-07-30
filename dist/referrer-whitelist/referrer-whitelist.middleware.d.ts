import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class ReferrerWhitelistMiddleware implements NestMiddleware {
    private allowedReferrers;
    use(req: Request, res: Response, next: NextFunction): void;
}
