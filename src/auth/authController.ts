import { Request, Response } from "express";
import { authService } from "./authService";
import { RegisterData,LoginData } from "../types";
import { Router } from "express";
import { authRequest } from "../middle_token/token";

class AuthController {
  public async register(req:Request<{}, RegisterData>, res: Response){
    try{
      const user = await authService.register(req.body);

      res.status(201).json({
        message: "Пользователь успешно создан",
        user: {id: user._id, email:user.email}
      })
    }catch(e: any){
      res.status(400).json({ error: e.message });
    }
  }

  public async login(req: Request<{}, {}, LoginData>, res: Response){
    try{
      const result = await authService.login(req.body)
      res.json(result)

    }catch(e: any){
      res.status(401).json({ error: e.message });
    }

  }

  public async myProfile(req: authRequest, res: Response){
    try{
      res.json({
        message: "Profile, пользователя",
        user: req.user
      })

    }catch(e: any){
       res.status(401).json({ error: e.message });
    }
  }



}


export const authController = new AuthController()