"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = exports.TodoController = void 0;
const todoService_1 = require("../base/todoService");
class TodoController {
    async createTodo(req, res) {
        try {
            const userId = req.user?.userId;
            if (!userId) {
                return res.status(401).json({ error: "Пользователь не авторизован" });
            }
            const todo = await todoService_1.todoService.craeteTodo(req.body, userId);
            return res.status(201).json({
                message: "Задача успешно создана",
                todo
            });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
    async deleteTodo(req, res) {
        try {
            const userId = req.user?.userId;
            if (!userId) {
                return res.status(401).json({ error: "Пользователь не авторизован" });
            }
            const todo = await todoService_1.todoService.deleteTodo(req.params.id, userId);
            return res.status(200).json({
                message: "Задача удалена",
                todo
            });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
exports.TodoController = TodoController;
exports.todoController = new TodoController();
