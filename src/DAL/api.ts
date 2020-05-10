import axios from 'axios';
import {TaskType, TodoType} from "../Components/types/entities";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.1/todo-lists/`,
    withCredentials: true,
    headers: {'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'}
});

type ServerResponseType<T> = {
    resultCode: number,
    messages: Array<string>,
    data: T

}


export const api = {

    getTodoLists() {
        return instance.get<ServerResponseType<{ items: Array<TodoType> }>>(``)
    },

    createTodoList(title: string) {
        return instance.post<ServerResponseType<{ item: TodoType }>>(``,
            {title: title},
        )
    },

    deleteListRequest(todoListId: string) {
        return instance.delete<ServerResponseType<{}>>(`${todoListId}`)
    },

    updateListRequest(todoListId: string, newTitleList: string) {
        return instance.put<ServerResponseType<{}>>(`${todoListId}`,
            {title: newTitleList})
    },

    getTasks(todoListId: string) {
        return instance.get<ServerResponseType<{ items: Array<TaskType> }>>(`${todoListId}/tasks`)
    },

    deleteTaskRequest(todoListId: string, taskId: string) {
        return instance.delete<ServerResponseType<{}>>(`${todoListId}/tasks/${taskId}`)
    },

    createTask(newTitle: string, todoListId: string) {
        return instance.post<ServerResponseType<{ item: TaskType }>>(`${todoListId}/tasks`,
            {title: newTitle},
        )
    },
    updateTask(todoListId: string, task: TaskType) {
        return instance.put<ServerResponseType<{ item: TaskType }>>(`${todoListId}/tasks/${task.id}`,
            {...task},
        )
    }


}

