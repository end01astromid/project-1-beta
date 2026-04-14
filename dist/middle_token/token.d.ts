import { Request, Response, NextFunction } from 'express';
export interface authRequest extends Request {
    user?: any;
}
export declare const authMiddleware: (req: authRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default authMiddleware;
//# sourceMappingURL=token.d.ts.map