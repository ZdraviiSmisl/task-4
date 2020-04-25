import React from 'react';
import style from './Todolist.module.css';
import TodoListHeader from './../TodoListHeader/TodoListHeader'
import TodoListTasks from "./../TodoListTasks/TodoListTasks";
import TodoListFooter from "./../TodoListFooter/TodoListFooter";
import {connect} from "react-redux";
import {
  add_Task,
  change_Task, changeList,
  deleteList,
  deleteTask,
  setFilterValue,
  setTasks
} from "../../../Redux/reducers/todoListReducer";
import {api} from "../../../DAL/api";
import AddNewItemForm from "../AddNewItemForm/AddNewItemForm";

class Todolist extends React.Component {


  componentDidMount() {
    api.getTasks(this.props.id)
      .then(res => {
        let tasks = res.data.items;
        this.props.setTasks(tasks, this.props.id);
      })
  };

  removeTask = (taskId) => {
    api.deleteTaskRequest(this.props.id, taskId).then(res => {
      if (res.data.resultCode === 0) {
        this.props.deleteTask(taskId, this.props.id)
      } else console.log(res.data.messages);
    })
  };

  addTask = (newTitle) => {
    api.createTask(newTitle, this.props.id).then(res => {
      let newTask = res.data.data.item;
      if (res.data.resultCode === 0) {
        this.props.add_Task(newTask, this.props.id);
      } else console.log(res.data.messages)
    });
  };

  removeList = () => {
    api.deleteListRequest(this.props.id)
      .then(res => {
        if (res.data.resultCode === 0) {
          this.props.deleteList(this.props.id);
        } else console.log(res.data.messages)
      })

  };
  changeTitleList=(newTitleList)=>{
    api.updateListRequest(this.props.id,newTitleList).
      then(res=>{
     this.props.changeList(this.props.id,newTitleList)
    })
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
    let currentTask = this.props.tasks.find(task => task.id === taskId);
    let task = {...currentTask, ...obj};
    api.updateTask(this.props.id, task)
      .then(res => {
        if (res.data.resultCode === 0) {
          this.props.change_Task(taskId, obj, this.props.id);
        } else {
          console.error(res.data.messages)
        }
        console.log(res.data);
      });
  };

  render() {
    let {tasks = []} = this.props;
    return (
      < div className={style.wrap}>
        < div className={style.todoList}>
          <TodoListHeader  title={this.props.title}
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
  {add_Task, change_Task, deleteTask, deleteList,changeList,setFilterValue, setTasks})(Todolist);


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