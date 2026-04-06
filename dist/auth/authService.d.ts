import { BaseServ } from "../base/baseService";
declare class AuthService extends BaseServ {
    constructor();
    register(data: any): Promise<any>;
    login(data: any): Promise<any>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=authService.d.ts.map