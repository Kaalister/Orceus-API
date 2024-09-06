"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let AppService = class AppService {
    async login(password) {
        const isAdmin = await bcrypt.compare(password, process.env.ADMIN_PWD);
        const isUser = await bcrypt.compare(password, process.env.USER_PWD);
        const isVisitor = await bcrypt.compare(password, process.env.VISITOR_PWD);
        if (isAdmin) {
            return {
                password: password,
                connected: true,
                sessionType: '09c71624'
            };
        }
        if (isUser) {
            return {
                password: password,
                connected: true,
                sessionType: '82ffd305'
            };
        }
        if (isVisitor) {
            return {
                password: password,
                connected: true,
                sessionType: 'a238a5dd'
            };
        }
        throw new common_1.UnauthorizedException();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map