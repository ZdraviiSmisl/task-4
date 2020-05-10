import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";
import {TaskType} from "../../types/entities";

let style = require('./TodoListTasks.module.css');


type PropsType = {
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void,
    changeStatus: (taskId: string, status: string) => void,
    changeTitle: (taskId: string, newTitle: string) => void,
    changePriority: (taskId: string, priority: number) => void,
}

class TodoListTasks extends React.Component<PropsType> {
    render = () => {
        let tasksElements = this.props.tasks.map(task =>
            <TodoListTask
                key={task.id}
                task={task}
                removeTask={this.props.removeTask}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
                changePriority={this.props.changePriority}
            />);
        return (
            <div className={style.todoListTasks}>
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;


