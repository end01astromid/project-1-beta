"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const mongoose_1 = require("mongoose");
const UserShema = new mongoose_1.Schema({
    email: { type: String, requred: true, unique: true },
    password: { type: String, required: true },
    roule: { type: String, default: "human" },
});
exports.UserModule = (0, mongoose_1.model)('User', UserShema);
//# sourceMappingURL=users.js.map