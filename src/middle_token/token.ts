import { Request,Response, NextFunction } from 'express';
import  Jwt  from 'jsonwebtoken';

export interface authRequest extends Request {
    user?: any
}


export const authMiddleware = (req: authRequest ,res:Response, next: NextFunction)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: 'Авторизация не предоставлена'});
    }
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Токен не предоставлен'});
    }
    try{
        const secret = process.env.JWT_SECRET as string
        const decoded = Jwt.verify(token, secret)
        req.user = decoded
        next()

    }catch{
        return res.status(401).json({message: 'Недействительный токен'});
    }
}

export default authMiddleware;