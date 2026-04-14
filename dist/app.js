"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const authRoutes_1 = __importDefault(require("./auth/authRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/auth", authRoutes_1.default);
async function startMongo() {
    try {
        const mongoURI = process.env.mongo_connect;
        if (!mongoURI) {
            throw new Error('Переменная окружения "mongo_connect" не определена');
        }
        await mongoose_1.default.connect(mongoURI);
        console.log('✅ Успешное подключение к MongoDB');
        app.listen(3000, () => console.log('🚀 Сервер на порту 3000'));
    }
    catch {
        console.error('Ошибка подключения к MongoDB:');
        process.exit(1); //команда немедленной остановки программы с пометкой «произошла ошибка
    }
}
startMongo();
