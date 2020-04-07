import React from 'react';
import style from './Todolist.module.css';
import {LocalStorage} from './../../../OutsideComponents/LocalStorage';
import TodoListHeader from './../TodoListHeader/TodoListHeader'
import TodoListTasks from "./../TodoListTasks/TodoListTasks";
import TodoListFooter from "./../TodoListFooter/TodoListFooter";
import {connect} from "react-redux";

class Todolist extends React.Component {

    nextTaskId = 0;
    state = {
        tasks: [],
        filterValue: "All",

    };

    componentDidMount() {
    };

    removeTask = (taskId) => {
        let filterTasks = this.state.tasks.filter(
            t => t.id !== taskId
        );
        this.props.deleteTask(taskId, this.props.id)
    };

    addTask = (newTitle) => {
        let whenCreatedTask = new Date();
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: 'low',
            created: whenCreatedTask + '',
            updated: '',
            finished: ''
        };
        this.props.add_Task(newTask, this.props.id);
        this.nextTaskId++;

    };

    removeList = () => {
        this.props.deleteList(this.props.id);
    };

    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        },)
    };

    changeStatus = (taskId, isDone) => {
        let whenFinishedTask = new Date();
        this.changeTask(taskId, {isDone: isDone, finished: whenFinishedTask + ''})
    };

    changeTitle = (taskId, newTitle) => {
        let whenUpdatedTask = new Date();
        this.changeTask(taskId, {title: newTitle, updated: whenUpdatedTask + ''})
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj};
            } else {
                return t;
            }
        });
        this.props.change_Task(taskId, obj, this.props.id)

    };

    render() {
        return (
            < div className={style.wrap}>
                < div className={style.todoList}>
                    <TodoListHeader addTask={this.addTask} title={this.props.title}/>
                    <TodoListTasks
                        changePriority={this.changePriority}
                        removeTask={this.removeTask}
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.props.tasks.filter(t => {
                            switch (this.state.filterValue) {
                                case 'Active':
                                    return !t.isDone;
                                case 'Completed':
                                    return t.isDone;
                                case 'All':
                                    return true;
                                default:
                                    return true;
                            }
                        })}/>
                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}/>
                    <span className={style.button_delete}>
                        <button onClick={this.removeList}>X</button>
                    </span>
                </div>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        add_Task: (newTask, todoListId) => {

            const action = {
                type: 'ADD-TASK',
                newTask: newTask,
                todoListId: todoListId
            };

            dispatch(action)
        },
        change_Task: (taskId, obj, todoListId) => {
            const action = {
                type: 'CHANGE_TASK',
                obj: obj,
                taskId: taskId,
                todoListId: todoListId
            };


            dispatch(action)
        },
        deleteTask: (taskId, todoListId) => {
            const action = {
                type: 'DELETE_TASK',
                taskId: taskId,
                todoListId: todoListId
            };
            dispatch(action)
        },
        deleteList: (todoListId) => {

            const action = {
                type: 'DELETE_LIST',
                todoListId: todoListId
            };
            dispatch(action)
        }
    }
};
const ConnectedTodolist = connect(null, mapDispatchToProps)(Todolist);
export default ConnectedTodolist;


/* saveState = () => {
        LocalStorage.saveTasks(this.state, this.props.id);
    };
*/
/* restoreState = () => {
     let tasks = LocalStorage.getTasks();
     if (tasks !== null) {
         this.setState(tasks);
     }
 };*/
