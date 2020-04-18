import React from 'react';
import style from './Todolist.module.css';
import TodoListHeader from './../TodoListHeader/TodoListHeader'
import TodoListTasks from "./../TodoListTasks/TodoListTasks";
import TodoListFooter from "./../TodoListFooter/TodoListFooter";
import {connect} from "react-redux";
import {
  add_Task,
  change_Task,
  deleteList,
  deleteTask,
  setFilterValue,
  setTasks
} from "../../../Redux/reducers/todoListReducer";
import axios from 'axios';

class Todolist extends React.Component {

  /*     nextTaskId = 0;*/

  /* state = {
       tasks: [],
       filterValue: "All",

   };*/


  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.id}/tasks`,
      {
        withCredentials: true,
        headers: {'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'}
      }
    )
      .then(res => {
        let tasks = res.data.items;
        this.props.setTasks(tasks, this.props.id);
      })
  };

  removeTask = (taskId) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.id}/tasks/${taskId}`,
      {withCredentials:true,
     headers:{'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'} }
      ).then(res=>{
        debugger
        if(res.data.resultCode===0) {
          this.props.deleteTask(taskId, this.props.id)
        } else  console.log(res.data.messages);
    })
  };

  addTask = (newTitle) => {
    axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.id}/tasks`,
      {title: newTitle},
      {
        withCredentials: true,
        headers: {'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'}
      }).then(res => {
      let newTask = res.data.data.item;
      if (res.data.resultCode === 0) {
        this.props.add_Task(newTask, this.props.id);
      }
    });
  };

  removeList = () => {
    debugger
    axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.id}`,
      {
        withCredentials: true,
        headers: {'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'}
      })
      .then(res => {
        debugger
        if (res.data.resultCode === 0) {
          this.props.deleteList(this.props.id);
        }
      })

  };

  changePriority = (taskId, priority) => {
    this.changeTask(taskId, {priority: priority})
  };

  changeFilter = (newFilterValue) => {
    this.props.setFilterValue(newFilterValue)
  };

  changeStatus = (taskId, isDone) => {
    let whenFinishedTask = new Date();
    this.changeTask(taskId, {isDone: isDone, finished: whenFinishedTask + ''})
  };

  changeTitle = (taskId, newTitle) => {
    let whenUpdatedTask = new Date();
    this.changeTask(taskId, {title: newTitle, updated: whenUpdatedTask + ''})
  };

  changeTask = (taskId, obj) => {
    this.props.change_Task(taskId, obj, this.props.id)

  };

  render() {
    let {tasks = []} = this.props;
    return (
      < div className={style.wrap}>
        < div className={style.todoList}>
          <TodoListHeader addTask={this.addTask} title={this.props.title}/>
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
          <span className={style.button_delete}>
                        <button onClick={this.removeList}>X</button>
                    </span>
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
  {add_Task, change_Task, deleteTask, deleteList, setFilterValue, setTasks})(Todolist);


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