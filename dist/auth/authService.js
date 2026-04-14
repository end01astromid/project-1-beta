"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = require("../model/users");
const baseService_1 = require("../base/baseService");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
class AuthService extends baseService_1.BaseService {
    constructor() {
        super(users_1.UserModule);
    }
    async register(data) {
        const candidate = await this.findOneByEmail(data.email);
        if (candidate) {
            throw new Error('Пользователь с таким email уже существует');
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(data.password, salt);
        //создаем user
        const user = await this.model.create({
            email: data.email,
            password: hashedPassword
        });
        return user;
    }
    async login(data) {
        const user = await this.findOneByEmail(data.email);
        if (!user) {
            throw new Error('Неверный email или пароль');
        }
        const isMatch = await bcryptjs_1.default.compare(data.password, user.password);
        if (!isMatch) {
            throw new Error('Неверный email или пароль');
        }
        //put-data/user
        const payload = {
            userId: user._id.toString(),
            email: user.email
        };
        //create token
        const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        return {
            message: "Успешный вход",
            token,
            user: {
                id: user._id.toString(),
                email: user.email
            }
        };
    }
}
exports.authService = new AuthService();
