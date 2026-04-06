import { UserModule } from "../model/users"; 
import { BaseServ } from "../base/baseService";

class AuthService extends BaseServ {
    constructor(){
        super(UserModule)
    }

    async register(data: any){
        const candidate = await this.findOneByeEmail(data.email)
        if (candidate) throw new Error('Пользователь уже есть');
        
        return await this.model.create(data)
    }

    async login(data: any){
        const user = await this.findOneByeEmail(data.email)
        if(!user || user.password !== data.password){
            throw new Error('Неверный логин')
        }
        return user;   
    }
}

export const authService = new AuthService()