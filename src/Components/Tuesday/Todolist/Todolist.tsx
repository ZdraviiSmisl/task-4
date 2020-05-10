import React from 'react';


import TodoListHeader from '../TodoListHeader/TodoListHeader'
import TodoListTasks from "../TodoListTasks/TodoListTasks";
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import {connect} from "react-redux";
import {
    addTask, change__Task, change_List,
    delete_List, delete_Task,
    get_Tusks,
    setFilterValue,
} from "../../../Redux/reducers/todoListReducer";
import AddNewItemForm from "../AddNewItemForm/AddNewItemForm";
import {TaskType, UpdateType} from "../../types/entities";
import {TodoStateType} from "../../../Redux/Store";

let style = require('./Todolist.module.css');

type OwnPropsType = {
    key: string,
    id: string,
    title: string,
    tasks: Array<TaskType>
}

type MapStateToPropsType = {
    nextTaskId: number,
    filterValue: string
}

type MapDispatchPropsType = {
    get_Tusks: (id: string) => void,
    delete_Task: (id: string, taskId: string) => void,
    addTask: (newTitle: string, id: string) => void,
    delete_List: (id: string) => void,
  change_List:(id: string,newTitleList:string)=>void,
  changeTask:(taskId:string, obj:UpdateType)=>void,
  setFilterValue:(newFilterValue:string)=>void,
  change__Task:(taskId:string, obj:UpdateType, id:string)=>void,

}
type PropsType = OwnPropsType & MapDispatchPropsType & MapStateToPropsType;

class Todolist extends React.Component<PropsType> {


    componentDidMount() {
        this.props.get_Tusks(this.props.id);

    };

    removeTask = (taskId: string) => {
        this.props.delete_Task(this.props.id, taskId)

    };

    addTask = (newTitle: string) => {
        this.props.addTask(newTitle, this.props.id)

    };

    removeList = () => {
        this.props.delete_List(this.props.id)


    };
    changeTitleList = (newTitleList:string) => {
        this.props.change_List(this.props.id, newTitleList)

    }

    changePriority = (taskId:string, priority:number) => {
        this.changeTask(taskId, {priority: priority})
    };

    changeFilter = (newFilterValue:string) => {
        this.props.setFilterValue(newFilterValue)
    };

    changeStatus = (taskId:string, status:string) => {
        let whenFinishedTask = new Date();
        this.changeTask(taskId, {status: status /*finished: whenFinishedTask + ''*/})
    };

    changeTitle = (taskId:string, newTitle:string) => {
        let whenUpdatedTask = new Date();
        this.changeTask(taskId, {title: newTitle /*updated: whenUpdatedTask + ''}*/)
    };

    changeTask = (taskId:string, obj:UpdateType) => {
        let changeTask=this.props.tasks.find(task=>{
        return task.id===taskId
        });
        let task={...changeTask, ...obj}

        this.props.change__Task(taskId, obj, this.props.id,task);
    };

    render() {
        let {tasks = []} = this.props;
        return (
            < div className={style.wrap}>
                < div className={style.todoList}>
                    <TodoListHeader title={this.props.title}
                                    changeTitleList={this.changeTitleList}
                                    onDelete={this.removeList}/>
                    <AddNewItemForm addItem={this.addTask}/>
                    <TodoListTasks
                        changePriority={this.changePriority}
                        removeTask={this.removeTask}
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={tasks.filter(t => {
                            switch (this.props.filterValue) {
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
                    <TodoListFooter filterValue={this.props.filterValue}
                                    changeFilter={this.changeFilter}/>

                </div>
            </div>
        )
    }
}

let mapStateToProps = ({todolists}:TodoStateType):MapStateToPropsType => {
    return {
        nextTaskId: todolists.nextTaskId,
        filterValue: todolists.filterValue
    }
}

export default connect<MapStateToPropsType,MapDispatchPropsType,OwnPropsType,{}>(mapStateToProps,
    {
        addTask, change__Task, delete_Task,
        delete_List, change_List, setFilterValue, get_Tusks
    })(Todolist);

