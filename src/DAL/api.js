import axios from 'axios';

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.1/todo-lists/`,
  withCredentials: true,
  headers: {'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'}
});


export const api = {

  getTodoLists() {
    return instance.get(``)
  },

  createTodoList(title) {
    return instance.post(``,
      {title: title},
    )
  },

  deleteListRequest(todoListId) {
    return instance.delete(`${todoListId}`)
  },

  updateListRequest(todoListId,newTitleList){
    return instance.put(`${todoListId}`,
      {title:newTitleList})
  },

  getTasks(todoListId) {
    return instance.get(`${todoListId}/tasks`)
  },

  deleteTaskRequest(todoListId, taskId) {
    return instance.delete(`${todoListId}/tasks/${taskId}`)
  },

  createTask(newTitle, todoListId) {
    return instance.post(`${todoListId}/tasks`,
      {title: newTitle},
    )
  },
  updateTask(todoListId, task) {
    return instance.put(`${todoListId}/tasks/${task.id}`,
      {...task},
    )
  }


}