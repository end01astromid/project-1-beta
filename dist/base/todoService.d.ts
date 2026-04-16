import { BaseService } from "./baseService";
import { ITodo } from "../model/todo";
import { CreateTodoData } from "../types";
export declare class TodoSerivce extends BaseService<ITodo> {
    constructor();
    craeteTodo(data: CreateTodoData, userId: string): Promise<Omit<import("mongoose").Document<unknown, {}, ITodo, {}, {}> & ITodo & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    deleteTodo(todoId: string, userId: string): Promise<ITodo>;
}
export declare const todoService: TodoSerivce;
//# sourceMappingURL=todoService.d.ts.map