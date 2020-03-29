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



    state = {

        tasks: [
             /*{id:0,title: "JS", isDone: true, priority: "high"},
             {id:1,title: "HTML", isDone: true, priority: "low"},
             {id:2,title: "CSS", isDone: true, priority: "medium"},
             {id:3,title: "REACT", isDone: false, priority: "high"}*/
        ],
        filterValue: "All",
        loading: true,
        nextTaskId: 0
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
        let whenCreatedTask = new Date();
        let newTask = {
            id: this.state.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: 'low',
            created: whenCreatedTask+'',
            updated:'',
            finished:''
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks,
            nextTaskId: this.state.nextTaskId + 1
        }, () => saveState(this.state));

    };
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => saveState(this.state))
    };

    changeStatus = (taskId, isDone) => {
        let whenFinishedTask=new Date();
        this.changeTask(taskId, {isDone: isDone,finished:whenFinishedTask+''})
    };

    changeTitle = (taskId, newTitle) => {
        let whenUpdatedTask=new Date();
        this.changeTask(taskId, {title: newTitle,updated:whenUpdatedTask+''})
    };

    changeTask = (taskId, obj) => {
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
                {this.state.loading ? <Preloader/> :
                    < div className={style.Wrap}>
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
                    </div>}
            </>
        )

    }

}

export default Tuesday;