import { Request, Response } from "express";
import { RegisterData, LoginData } from "../types";
declare class AuthController {
    register(req: Request<{}, RegisterData>, res: Response): Promise<void>;
    login(req: Request<{}, {}, LoginData>, res: Response): Promise<void>;
}
export declare const authController: AuthController;
export {};
//# sourceMappingURL=authController.d.ts.map