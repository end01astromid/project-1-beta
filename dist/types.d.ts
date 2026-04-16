export interface RegisterData {
    email: string;
    password: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export interface JwtPayload {
    userId: string;
    email: string;
}
export interface AuthResponse {
    message: string;
    token: string;
    user: {
        id: string;
        email: string;
    };
}
export interface CreateTodoData {
    title: string;
}
export interface updateTodoData {
    title?: string;
}
export interface todoResponse {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=types.d.ts.map