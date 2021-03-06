import React from 'react';
import CustomizedTooltips from "../../../../OutsideComponents/Tooltip/Tooltipe";
import {TaskType} from "../../../types/entities";

let style = require('./TodoListTask.module.css');

type StateType = {
    editMode: boolean,
    title: string
}


type PropsType = {
    task: TaskType,
    changeStatus: (id: string, status: number) => void,
    changeTitle: (id: string, title: string) => void,
    removeTask: (id: string) => void,
    changePriority: (id: string, priority: number) => void
}

class TodoListTask extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        title: this.props.task.title
    };

    onIsDoneChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        let status = e.currentTarget.checked ? 2 : 0
        this.props.changeStatus(this.props.task.id, status);
    };

    activatedEditMode = () => {
        this.setState({editMode: true})
    };

    deactivatedEditMode = () => {
        this.setState({editMode: false})
        this.props.changeTitle(this.props.task.id, this.state.title);
    };

    onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value})
    };

    clickForDel = () => {
        this.props.removeTask(this.props.task.id);
    };

    togglePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let priority = Number(e.target.value);
        this.props.changePriority(this.props.task.id, priority)
    };

    render() {
        let taskClass = this.props.task.isDone ? `${style.todoListTask} ${style.done}` : style.todoListTask;
        let changePriorityClass = this.props.task.priority === 0 ? style.low : this.props.task.priority === 1
            ? style.middle : this.props.task.priority === 2 ? style.high : '';

        return (

            /*<CustomizedTooltips created={this.props.task.created}
                                updated={this.props.task.updated}
                                finished={this.props.task.finished}>*/
            <div className={style.wrap_task}>
                <div className={taskClass}>
                    <input className={style.checkbox__class} type='checkbox'
                           checked={this.props.task.status === 2}
                           onChange={this.onIsDoneChanged}
                    />
                    {this.state.editMode ?
                        <input className={style.input} autoFocus={true}
                               onBlur={this.deactivatedEditMode}
                               onChange={this.onTitleChanged}
                               value={this.state.title}/>
                        :
                        <span onClick={this.activatedEditMode}
                              className={changePriorityClass}>{this.props.task.id} {this.state.title} </span>
                    }
                    <select className={style.select__class} value={this.props.task.priority}
                            onChange={this.togglePriority}>
                        <option value="2">high</option>
                        <option value="0">low</option>
                        <option value="1">middle</option>
                    </select>
                    <button className={style.delete__task} onClick={this.clickForDel}>X</button>
                </div>
            </div>
            /* </CustomizedTooltips>*/

        );
    }
}

export default TodoListTask;
