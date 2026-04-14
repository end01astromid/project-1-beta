import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { UserModule,IUser } from '../model/users'
import { BaseService } from '../base/baseService'
import { RegisterData, LoginData, JwtPayload, AuthResponse } from '../types'
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'


class AuthService extends BaseService<IUser>{
    constructor(){
        super(UserModule)
    }

    async register(data: RegisterData): Promise<IUser> {
        const candidate = await this.findOneByEmail(data.email);

        if(candidate){
           throw new Error('Пользователь с таким email уже существует');     
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)
        //создаем user
        const user = await this.model.create({
            email: data.email,
            password: hashedPassword
        })
        return user
    }

    async login(data: LoginData): Promise<AuthResponse> {
        const user = await this.findOneByEmail(data.email)
        if(!user){
          throw new Error('Неверный email или пароль');
        }

        const isMatch = await bcrypt.compare(data.password, user.password);

        if(!isMatch){
           throw new Error('Неверный email или пароль');
        }
        //put-data/user
        const payload: JwtPayload = {
            userId: user._id.toString(),
            email: user.email
        }
        //create token
       const token = jwt.sign(payload,JWT_SECRET!,                                                     
        {expiresIn: JWT_EXPIRES_IN as any})

       return {
       message: "Успешный вход",
        token,
        user: {
            id: user._id.toString(),
            email: user.email
        }
       } 

     }

}

export const authService = new AuthService();
