import {Schema, model} from "mongoose"


const UserShema = new Schema({
    email: {type: String, requred: true, unique: true},
    password: {type: String, required: true},
    roule: {type: String, default: "human"},
})

export const UserModule = model ('User', UserShema)