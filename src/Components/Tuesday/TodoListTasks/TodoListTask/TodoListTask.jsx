import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoListTask.module.css';
import CustomizedTooltips from "../../../../OutsideComponents/Tooltip/Tooltipe";

class TodoListTask extends React.Component {
    state = {
        editMode: false,
    };
    onIsDoneChanged = (e) => {
        let status = e.currentTarget.checked ? 2 : 0
        this.props.changeStatus(this.props.task.id, status);
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
        let taskClass = this.props.task.isDone ? `${style.todoListTask} ${style.done}` : style.todoListTask;
        let changePriorityClass = this.props.task.priority === 'low' ? style.low : this.props.task.priority === 'middle'
            ? style.middle : this.props.task.priority === 'high' ? style.high : '';

        return (

            <CustomizedTooltips created={this.props.task.created}
                                updated={this.props.task.updated}
                                finished={this.props.task.finished}>
                <div className={style.wrap_task}>
                    <div className={taskClass}>
                        <input className={style.checkbox__class} type='checkbox'
                               checked={this.props.task.status === 2}
                               onChange={this.onIsDoneChanged}
                        />
                        {this.state.editMode ?
                            <input className={style.input} autoFocus={true}
                                   onBlur={this.deactivatedEditMode}
                                   onChange={this.onTitleChanged}/>
                            :
                            <span onClick={this.activatedEditMode}
                                  className={changePriorityClass}>{this.props.task.id} {this.props.task.title} </span>
                        }
                        <select className={style.select__class} value={this.props.task.priority}
                                onChange={this.togglePriority}>
                            <option value="high">high</option>
                            <option value="low">low</option>
                            <option value="middle">middle</option>
                        </select>
                        <button className={style.delete__task} onClick={this.clickForDel}>X</button>
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