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
  todoLists: [],
  loading: true,
  nextTodolistId: 0,
  nextTaskId: 0,
  filterValue: "All"
};
const todoListReducer = (state = initialState, action) => {

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

export const setTasks = (tasks, todoListId) => ({type: SET_TASKS, tasks, todoListId});
export const setTodoLists = (todolists) => ({type: SET_TODOLISTS, todolists});
export const addTodoList = (newTodoList) => ({type: ADD_TODOLIST, newTodoList});
export const loadContent = () => ({type: SET_LOADING});
export const add_Task = (newTask, todoListId) => ({type: ADD_TASK, newTask, todoListId});
export const change_Task = (taskId, obj, todoListId) => ({type: CHANGE_TASK, taskId, obj, todoListId});
export const changeList = (todoListId, todoListTitle) => ({type: CHANGE_LIST, todoListId, todoListTitle});
export const deleteTask = (taskId, todoListId) => ({type: DELETE_TASK, taskId, todoListId});
export const deleteList = (todoListId) => ({type: DELETE_LIST, todoListId});
export const setFilterValue = (newFilterValue) => ({type: SET_FILTER, newFilterValue});

export default todoListReducer;