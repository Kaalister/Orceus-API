import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class ReferrerWhitelistMiddleware implements NestMiddleware {
    private allowedReferrerPatterns;
    use(req: Request, res: Response, next: NextFunction): void;
}
