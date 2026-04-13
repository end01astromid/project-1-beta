import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import { authController } from "./auth/authController";

const app = express();
app.use(express.json());

// Маршруты
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);


async function startMongo(){
    try{
        const mongoURI = process.env.mongo_connect
        if(!mongoURI){
         throw new Error('Переменная окружения "mongo_connect" не определена');
    }            
     await mongoose.connect(mongoURI)
     console.log('✅ Успешное подключение к MongoDB');
    app.listen(3000, () => console.log('🚀 Сервер на порту 3000'));
    }catch{
     console.error('Ошибка подключения к MongoDB:');
     process.exit(1) //команда немедленной остановки программы с пометкой «произошла ошибка
    }
}

startMongo()