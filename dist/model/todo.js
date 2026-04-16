"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true, //remove edges
        maxLength: 250
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {
    timestamps: true
});
exports.TodoModel = (0, mongoose_1.model)('Todo', todoSchema);
