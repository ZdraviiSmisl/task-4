import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoListTask.module.css';
import {Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CustomizedTooltips from "../../../../OutsideComponents/Tooltip/Tooltipe";

class TodoListTask extends React.Component {
    state = {
        editMode: false,
    };
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };
    activatedEditMode = () => {
        this.setState({editMode: true})
    };
    deactivatedEditMode = () => {
        this.setState({editMode: false})
    };
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };
    clickForDel = () => {
        this.props.removeTask(this.props.task.id);
    };
    togglePriority = (e) => {
        let priority = e.target.value;
        this.props.changePriority(this.props.task.id, priority)
    };

    render() {
        let taskClass = this.props.task.isDone ? style.todoListTask + '' + style.done : style.todoListTask;
        let changePriorityClass = this.props.task.priority === 'low' ? style.low : this.props.task.priority === 'middle'
            ? style.middle : this.props.task.priority === 'high' ? style.high : '';

        return (
           /* <Tooltip placement="top-start" title={`created: ${this.props.task.created}
             updated: ${this.props.task.updated}
             finished: ${this.props.task.finished} `}>*/
            <CustomizedTooltips created={this.props.task.created}
                                updated={this.props.task.updated}
                                finished={this.props.task.finished}>
                <div className={style.wrap_task}>
                    <div className={taskClass}>
                        <input type='checkbox'
                               checked={this.props.task.isDone}
                               onChange={this.onIsDoneChanged}
                        />
                        {this.state.editMode ?
                            <input className={changePriorityClass}
                                   autoFocus={true}
                                   onBlur={this.deactivatedEditMode}
                                   onChange={this.onTitleChanged}/>
                            :
                            <span onClick={this.activatedEditMode}>{this.props.task.id} {this.props.task.title} </span>
                        }
                        <select value={this.props.task.priority} onChange={this.togglePriority}>
                            <option value="high">high</option>
                            <option value="low">low</option>
                            <option value="middle">middle</option>
                        </select>
                        <span><button onClick={this.clickForDel}>Del</button></span>
                    </div>
                </div>
            </CustomizedTooltips>

        );
    }
}

export default TodoListTask;
TodoListTask.propTypes = {
    tasks: PropTypes.string,
    isDone: PropTypes.bool,
    priority: PropTypes.string
};