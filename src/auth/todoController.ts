import { Request, Response } from "express";
import { todoService } from "../base/todoService";
import { CreateTodoData } from "../types";

export class TodoController {
    public async createTodo(req: Request<{}, {}, CreateTodoData>, res: Response) {
        try {
            const userId = (req as any).user?.userId;

            if (!userId) {
                return res.status(401).json({ error: "Пользователь не авторизован" });
            }

            const todo = await todoService.craeteTodo(req.body, userId);

            return res.status(201).json({
                message: "Задача успешно создана",
                todo
            });
        } catch (e: any) {
            return res.status(400).json({ error: e.message });
        }
    }

    public async deleteTodo(req: Request<{ id: string }>, res: Response) {
        try {
            const userId = (req as any).user?.userId;

            if (!userId) {
                return res.status(401).json({ error: "Пользователь не авторизован" });
            }

            const todo = await todoService.deleteTodo(req.params.id, userId);

            return res.status(200).json({
                message: "Задача удалена",
                todo
            });
        } catch (e: any) {
            return res.status(400).json({ error: e.message });
        }
    }
}

export const todoController = new TodoController();
