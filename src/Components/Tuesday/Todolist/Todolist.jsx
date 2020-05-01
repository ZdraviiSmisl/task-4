import React from 'react';
import style from './Todolist.module.css';
import TodoListHeader from './../TodoListHeader/TodoListHeader'
import TodoListTasks from "./../TodoListTasks/TodoListTasks";
import TodoListFooter from "./../TodoListFooter/TodoListFooter";
import {connect} from "react-redux";
import {
  addTask, change__Task, change_List,
  delete_List, delete_Task,
  get_Tusks,
  setFilterValue,
} from "../../../Redux/reducers/todoListReducer";
import AddNewItemForm from "../AddNewItemForm/AddNewItemForm";

class Todolist extends React.Component {


  componentDidMount() {
    this.props.get_Tusks(this.props.id);

  };

  removeTask = (taskId) => {
    this.props.delete_Task(this.props.id, taskId)

  };

  addTask = (newTitle) => {
    this.props.addTask(newTitle, this.props.id)

  };

  removeList = () => {
    this.props.delete_List(this.props.id)


  };
  changeTitleList = (newTitleList) => {
    this.props.change_List(this.props.id, newTitleList)

  }

  changePriority = (taskId, priority) => {
    this.changeTask(taskId, {priority: priority})
  };

  changeFilter = (newFilterValue) => {
    this.props.setFilterValue(newFilterValue)
  };

  changeStatus = (taskId, status) => {
    let whenFinishedTask = new Date();
    this.changeTask(taskId, {status: status, finished: whenFinishedTask + ''})
  };

  changeTitle = (taskId, newTitle) => {
    let whenUpdatedTask = new Date();
    this.changeTask(taskId, {title: newTitle, updated: whenUpdatedTask + ''})
  };

  changeTask = (taskId, obj) => {
    this.props.change__Task(taskId, obj, this.props.id);
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

let mapStateToProps = ({todolists}) => {
  return {
    nextTaskId: todolists.nextTaskId,
    filterValue: todolists.filterValue
  }
}

export default connect(mapStateToProps,
  {
    addTask, change__Task, delete_Task,
    delete_List, change_List, setFilterValue, get_Tusks
  })(Todolist);


/*let newTasks = this.state.tasks.map(t => {
           if (t.id === taskId) {
               return {...t, ...obj};
           } else {
               return t;
           }
       });*/

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
/*let mapDispatchToProps = (dispatch) => {
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
};*/

/*let whenCreatedTask = new Date();
   let newTask = {
     id: this.props.nextTaskId,
     title: newTitle,
     isDone: false,
     priority: 'low',
     created: whenCreatedTask + '',
     updated: '',
     finished: ''
   };*/