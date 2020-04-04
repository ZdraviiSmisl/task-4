import {createStore} from "redux";

const initialState = {
    todoLists: [
      /*  {
            "title": "every day", "id": 1, tasks:
                [{
                    "id": 0, "title": "fddf",
                    "isDone": false, "priority": "low",
                    "created": "Fri Apr 03 2020 13:24:46 GMT+0300 (Москва, стандартное время)",
                    "updated": "", "finished": ""
                }]
        },
        {
            "title": "sdfsdf", "id": 2, tasks:
                [{
                    "id": 0, "title": "dfdf",
                    "isDone": false, "priority": "high",
                    "created": "Fri Apr 03 2020 13:24:50 GMT+0300 (Москва, стандартное время)",
                    "updated": "", "finished": ""
                }]
        }*/
    ],
    loading: true,
    nextTodolistId: 0
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            /*let state={...state,
                todoLists: [...state.todoLists, action.newTodoList]}*/

            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodoList],
                nextTodolistId: state.nextTodolistId + 1
            };
        case 'ADD-TASK':

            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                    if (tl.id === action.todoListId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}

                    } else {
                        return tl;
                    }
                })
            };

        case 'CHANGE_TASK':
            return {
                ...state,
                todoLists: state.todoLists.map(todo => {
                    if (todo.id === action.todoListId) {
                        return {
                            ...todo, tasks: todo.tasks.map(task => {
                                if (task.id === action.taskId) {
                                    return {...task, ...action.obj}
                                } else {
                                    return task;
                                }
                            })
                        }
                    } else {
                        return todo;
                    }
                })
            };
        case 'DELETE_TASK':
            return {
                ...state,
                todoLists: state.todoLists.map(list=>{
                    if(list.id===action.todoListId){
                        return {
                            ...list,tasks:list.tasks.filter(t=>t.id !== action.taskId)
                            }
                        }
                     else {
                         return list;
                    }

                })
            };
        case 'DELETE_LIST':
            return  {
                ...state,
                todoLists: state.todoLists.filter(
                    l => l.id !== action.todoListId)
            };

        case "SET_LOADING":
            return {...state, loading: false}

    }

    return state;
};

const store = createStore(reducer);
export default store;