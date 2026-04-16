import { Schema, model, Document, Types } from "mongoose";

export interface ITodo extends Document{
    title: string,
    userId: Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
}


const todoSchema = new Schema<ITodo>({
    title: {
        type: String,
        required: true,
        trim: true, //remove edges
        maxLength: 250
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {
    timestamps: true
})

export const TodoModel = model<ITodo>('Todo', todoSchema)
