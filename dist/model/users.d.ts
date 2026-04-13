import { Document, Types } from "mongoose";
export interface IUser extends Document {
    _id: Types.ObjectId;
    email: string;
    password: string;
}
export declare const UserModule: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=users.d.ts.map