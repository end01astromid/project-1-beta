import { Request, Response } from "express";
import { authService } from "./authService";

class AuthController {
    public async register(req: Request, res: Response){
        try{
            const user = await authService.register(req.body)
            res.status(201).json(user)
        }catch(e: any){
            res.status(400).json({error: e.message})
        }
    }

    public async login(req:Request, res: Response){
        try{
            const user = await authService.login(req.body)
            res.status(201).json(user)
        }catch(e: any){
            res.status(401).json({ error: e.message });
        }
    }
}

export const authController = new AuthController();