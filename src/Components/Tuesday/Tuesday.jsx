import React from 'react';
import style from './Tuesday.module.css';
import {saveState, restoreState} from '../../OutsideComponents/LocalStorage';
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
import Preloader from "../../OutsideComponents/Preloader/Preloader";

class Tuesday extends React.Component {
    constructor(props) {
        super(props);


    }

    nextTaskId = 0;

    state = {
        tasks: [
            /* {id:0,title: "JS", isDone: true, priority: "high"},
             {id:1,title: "HTML", isDone: true, priority: "low"},
             {id:2,title: "CSS", isDone: true, priority: "medium"},
             {id:3,title: "REACT", isDone: false, priority: "high"}*/
        ],
        filterValue: "All",
        loading: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 3000);
        let state = restoreState();
        this.setState(state)

    }

    removeTask = (taskId) => {
        let filterTasks = this.state.tasks.filter(
            t => t.id !== taskId
        );
        this.setState({tasks: filterTasks}, () => saveState(this.state));
    };
    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: 'low'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => saveState(this.state));

    };
changePriority=(taskId,priority)=>{
this.changeTask(taskId,{priority:priority})
};

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => saveState(this.state))
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})

    };
    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    };

    changeTask = (taskId, obj) => {
        debugger
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj};
            } else {
                return t;
            }
        });
        this.setState({

                tasks: newTasks
            }, () => saveState(this.state)
        )
    };


    render() {
        return (

            <>
                {this.state.loading ? (<Preloader/>) :
                    (< div className={style.Wrap}>
                        < div className={style.todoList}>
                            <TodoListHeader addTask={this.addTask}/>
                            <TodoListTasks
                                changePriority={this.changePriority}
                                removeTask={this.removeTask}
                                changeTitle={this.changeTitle}
                                changeStatus={this.changeStatus}
                                tasks={this.state.tasks.filter(t => {
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
                        </div>
                    </div>)}

            </>
        )

    }

}

export default Tuesday;