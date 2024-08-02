"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferrerWhitelistMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ReferrerWhitelistMiddleware = class ReferrerWhitelistMiddleware {
    constructor() {
        this.allowedReferrerPatterns = [
            /^https:\/\/www\.orceus\.fr\//,
            /^https?:\/\/localhost:3000?\//
        ];
    }
    use(req, res, next) {
        const referrer = (req.headers.referer || req.headers.referrer);
        console.log('referrer', referrer);
        if (referrer && this.allowedReferrerPatterns.some(pattern => pattern.test(referrer))) {
            next();
        }
        else {
            console.error('Access denied');
            res.status(403).send('Access denied');
        }
    }
};
exports.ReferrerWhitelistMiddleware = ReferrerWhitelistMiddleware;
exports.ReferrerWhitelistMiddleware = ReferrerWhitelistMiddleware = __decorate([
    (0, common_1.Injectable)()
], ReferrerWhitelistMiddleware);
//# sourceMappingURL=referrer-whitelist.middleware.js.map