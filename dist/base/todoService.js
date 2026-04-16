"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = exports.TodoSerivce = void 0;
const baseService_1 = require("./baseService");
const todo_1 = require("../model/todo");
class TodoSerivce extends baseService_1.BaseService {
    constructor() {
        super(todo_1.TodoModel);
    }
    async craeteTodo(data, userId) {
        const todo = await this.model.create({
            title: data.title,
            userId
        });
        return await todo.populate("userId", "email");
    }
    async deleteTodo(todoId, userId) {
        const todo = await this.model.findOne({ _id: todoId, userId }).populate("userId", "email");
        if (!todo) {
            throw new Error('Задача не найдена или у вас нет прав на её удаление');
        }
        await this.model.deleteOne({ _id: todoId });
        return todo;
    }
}
exports.TodoSerivce = TodoSerivce;
exports.todoService = new TodoSerivce();
