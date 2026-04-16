import { Document, Types } from "mongoose";
export interface ITodo extends Document {
    title: string;
    userId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const TodoModel: import("mongoose").Model<ITodo, {}, {}, {}, Document<unknown, {}, ITodo, {}, {}> & ITodo & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=todo.d.ts.map