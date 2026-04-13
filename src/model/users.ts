import {Schema, model, Document,Types} from "mongoose"

export interface IUser extends Document{
  _id: Types.ObjectId
  email: string,
  password: string
}

const userSchema = new Schema<IUser>({ 
    email: { 
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {timestamps: true},)


export const UserModule = model<IUser>('User',userSchema)