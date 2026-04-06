"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const users_1 = require("../model/users");
const baseService_1 = require("../base/baseService");
class AuthService extends baseService_1.BaseServ {
    constructor() {
        super(users_1.UserModule);
    }
    async register(data) {
        const candidate = await this.findOneByeEmail(data.email);
        if (candidate)
            throw new Error('Пользователь уже есть');
        return await this.model.create(data);
    }
    async login(data) {
        const user = await this.findOneByeEmail(data.email);
        if (!user || user.password !== data.password) {
            throw new Error('Неверный логин');
        }
        return user;
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=authService.js.map