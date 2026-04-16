import { Request, Response } from "express";
import { CreateTodoData } from "../types";
export declare class TodoController {
    createTodo(req: Request<{}, {}, CreateTodoData>, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteTodo(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const todoController: TodoController;
//# sourceMappingURL=todoController.d.ts.map