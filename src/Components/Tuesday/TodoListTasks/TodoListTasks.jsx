import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";
import PropTypes from 'prop-types';
import style from './TodoListTasks.module.css'

class TodoListTasks extends React.Component {

    render = () => {

        let tasksElements = this.props.tasks.map(task =>

            <TodoListTask
                key={task.id}
                task={task}
                removeTask={this.props.removeTask}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
            />);


        return (

            <div className={style.todoListTasks}>
                {tasksElements}
            </div>

        );
    }
}

export default TodoListTasks;

TodoListTasks.propTypes = {
    tasks: PropTypes.array
};

/* title={task.title}
          isDone={task.isDone}
          priority={task.priority}*/