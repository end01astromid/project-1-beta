import { Model, Document } from 'mongoose';
export declare class BaseService<T extends Document> {
    protected model: Model<T>;
    constructor(models: Model<T>);
    findOneByEmail(email: string): Promise<import("mongoose").IfAny<T, any, Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)> | null>;
}
//# sourceMappingURL=baseService.d.ts.map