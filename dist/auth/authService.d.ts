import { IUser } from '../model/users';
import { BaseService } from '../base/baseService';
import { RegisterData, LoginData, AuthResponse } from '../types';
declare class AuthService extends BaseService<IUser> {
    constructor();
    register(data: RegisterData): Promise<IUser>;
    login(data: LoginData): Promise<AuthResponse>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=authService.d.ts.map