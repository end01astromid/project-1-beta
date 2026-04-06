import { Schema } from "mongoose";
export declare const UserModule: import("mongoose").Model<{
    password: string;
    roule: string;
    email?: string | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    password: string;
    roule: string;
    email?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    password: string;
    roule: string;
    email?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    password: string;
    roule: string;
    email?: string | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    password: string;
    roule: string;
    email?: string | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    password: string;
    roule: string;
    email?: string | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=users.d.ts.map