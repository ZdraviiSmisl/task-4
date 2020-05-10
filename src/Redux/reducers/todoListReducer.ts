import {api} from '../../DAL/api';
import {TaskType, TodoType, UpdateType} from "../../Components/types/entities";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TodoStateType} from "../Store";

export const ADD_TODOLIST = 'ADD-TODOLIST';
export const ADD_TASK = 'ADD-TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const CHANGE_LIST = 'CHANGE_LIST';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_LIST = 'DELETE_LIST';
export const SET_LOADING = 'SET_LOADING';
export const SET_FILTER = 'SET_FILTER';
export const SET_TODOLISTS = 'SET_TODOLISTS';
export const SET_TASKS = 'SET_TASKS';


const initialState = {
    todoLists: [] as Array<TodoType>,
    loading: true,
    nextTodolistId: 0,
    nextTaskId: 0,
    filterValue: "All"
};


type InitialStateType = typeof initialState;


const todoListReducer = (state: InitialStateType = initialState, action: TodoActionTypes): InitialStateType => {

    switch (action.type) {

        case SET_TODOLISTS:
            return {
                ...state,
                todoLists: action.todolists
            }

        case SET_TASKS:

            return {
                ...state,
                todoLists: state.todoLists.map(todolist => {
                    if (todolist.id === action.todoListId) {
                        return {
                            ...todolist, tasks: action.tasks

                        }
                    } else {
                        return todolist;
                    }
                })
            }

        case ADD_TODOLIST:

            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodoList]
            };
        case CHANGE_LIST:
            return {
                ...state,
                todoLists: state.todoLists.map(todolist => {
                    if (todolist.id === action.todoListId) {
                        return {
                            ...todolist, title: action.todoListTitle
                        }
                    } else {
                        return todolist
                    }
                })
            }

        case SET_FILTER:
            return {
                ...state,
                filterValue: action.newFilterValue
            };

        case ADD_TASK:

            return {
                ...state,
                nextTaskId: state.nextTaskId + 1,
                todoLists: state.todoLists.map(tl => {
                    if (tl.id === action.todoListId) {
                        return {
                            ...tl, tasks: [...tl.tasks, action.newTask],

                        }
                    } else {
                        return tl;
                    }
                })
            };

        case CHANGE_TASK:

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
        case DELETE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(list => {
                    if (list.id === action.todoListId) {
                        return {
                            ...list, tasks: list.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return list;
                    }

                })
            };
        case DELETE_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter(
                    tl => tl.id !== action.todoListId)
            };

        case SET_LOADING:
            return {...state, loading: false}

    }

    return state;
};

type TodoActionTypes = setTasksType |
    setTodoListsType |
    addTodoListType |
    loadContentType |
    add_TaskType |
    change_TaskType |
    changeListType |
    deleteTaskType |
    deleteListType |
    setFilterValueType


const action={
 setTasks : (tasks: Array<TaskType>, todoListId: string): setTasksType => ({type: SET_TASKS, tasks, todoListId}),
     setTodoLists : (todolists: Array<TodoType>): setTodoListsType => ({type: SET_TODOLISTS, todolists}),
   addTodoList : (newTodoList: TodoType): addTodoListType => ({type: ADD_TODOLIST, newTodoList}),
   loadContent : (): loadContentType => ({type: SET_LOADING}),
   add_Task : (newTask: TaskType, todoListId: string): add_TaskType => ({type: ADD_TASK, newTask, todoListId}),
  change_Task : (taskId: string, obj: UpdateType, todoListId: string): change_TaskType => ({type: CHANGE_TASK, taskId, obj, todoListId}),
    changeList : (todoListId: string, todoListTitle: string): changeListType => ({type: CHANGE_LIST, todoListId, todoListTitle}),
  deleteTask : (taskId: string, todoListId: string): deleteTaskType => ({type: DELETE_TASK, taskId, todoListId}),
     deleteList : (todoListId: string): deleteListType => ({type: DELETE_LIST, todoListId}),
     setFilterValue :(newFilterValue: string): setFilterValueType => ({type: SET_FILTER, newFilterValue}),

}



type setTasksType = {
    type: typeof SET_TASKS,
    tasks: Array<TaskType>,
    todoListId: string

}


type setTodoListsType = {
    type: typeof SET_TODOLISTS,
    todolists: Array<TodoType>
}

type addTodoListType = {
    type: typeof ADD_TODOLIST,
    newTodoList: TodoType
}


type loadContentType = {
    type: typeof SET_LOADING
}

type add_TaskType = {
    type: typeof ADD_TASK,
    newTask: TaskType,
    todoListId: string
}



type change_TaskType = {
    type: typeof CHANGE_TASK,
    taskId: string,
    obj: UpdateType,
    todoListId: string
}

type changeListType = {
    type: typeof CHANGE_LIST,
    todoListId: string,
    todoListTitle: string

}

type deleteTaskType = {
    type: typeof DELETE_TASK,
    taskId: string,
    todoListId: string

}

type deleteListType = {
    type: typeof DELETE_LIST,
    todoListId: string
}

type setFilterValueType = {
    type: typeof SET_FILTER,
    newFilterValue: string
}

type ThunkType = ThunkAction<void, TodoStateType, unknown, TodoActionTypes>
export const get_TodoLists = (): ThunkType => {
    return (dispatch: ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        setTimeout(() => {
            dispatch(action.loadContent());
        }, 3000);
        api.getTodoLists()
            .then(res => {
                let todolists = res.data.data.items;
                dispatch(action.setTodoLists(todolists));
            });
    }
};


export const get_Tusks = (todoListId:string): ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        api.getTasks(todoListId)
            .then(res => {
                let tasks = res.data.data.items;
                dispatch(action.setTasks(tasks, todoListId));
            })
    }
};
export const Add_TodoList = (title:string):ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        api.createTodoList(title)
            .then(res => {
                let newTodoList = res.data.data.item;
                dispatch(action.addTodoList(newTodoList));
            });
    }
};
export const delete_Task = (todoListId:string, taskId:string):ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        api.deleteTaskRequest(todoListId, taskId).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(action.deleteTask(taskId, todoListId));
            } else console.log(res.data.messages);
        })
    }
};

export const addTask = (newTitle:string, todoListId:string):ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        api.createTask(newTitle, todoListId).then(res => {
            let newTask = res.data.data.item;
            if (res.data.resultCode === 0) {
                dispatch(action.add_Task(newTask, todoListId));
            } else console.log(res.data.messages)
        });
    }
};
export const delete_List = (todoListId:string):ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        api.deleteListRequest(todoListId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(action.deleteList(todoListId));
                } else console.log(res.data.messages)
            })
    }
};
export const change_List = (todoListId:string, newTitleList:string):ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {
        api.updateListRequest(todoListId, newTitleList).then(res => {
            dispatch(action.changeList(todoListId, newTitleList));
        })
    }
};

export const change__Task = (taskId:string, obj:UpdateType, todoListId:string,task:TaskType):ThunkType => {
    return (dispatch:ThunkDispatch<TodoStateType, unknown, TodoActionTypes>) => {


        api.updateTask(todoListId, task)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(action.change_Task(taskId, obj, todoListId));
                } else {
                    console.error(res.data.messages)
                }
            });
    }
}


export default todoListReducer;