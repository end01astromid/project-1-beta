import { BaseService } from "./baseService";
import { ITodo, TodoModel } from "../model/todo";
import { CreateTodoData } from "../types";


export class TodoSerivce extends BaseService<ITodo>{
    constructor(){
        super(TodoModel)
    }

    async craeteTodo(data:CreateTodoData, userId: string){
        const todo = await this.model.create({
            title: data.title,
            userId
        });
        return await todo.populate("userId", "email")
    }
    

    async deleteTodo(todoId: string, userId: string):Promise<ITodo>{
        const todo = await this.model.findOne({ _id: todoId, userId }).populate("userId", "email")
        if (!todo) {
            throw new Error('Задача не найдена или у вас нет прав на её удаление');
     }

     await this.model.deleteOne({_id: todoId})
     return todo

    }
    
}

export const todoService = new TodoSerivce();
