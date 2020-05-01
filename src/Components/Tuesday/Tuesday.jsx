import React from 'react';
import style from './Tuesday.module.css';
import Preloader from "../../OutsideComponents/Preloader/Preloader";
import AddNewItemForm from "./AddNewItemForm/AddNewItemForm";
import Todolist from "./Todolist/Todolist";
import {connect} from "react-redux";
import {Add_TodoList, get_TodoLists} from "../../Redux/reducers/todoListReducer";


class Tuesday extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
this.props.get_TodoLists();
  }

  onAddTodoList = (title) => {
    this.props.Add_TodoList(title)


  };

  render() {

    const todoListsElements = this.props.todoLists.map(
      tl => <Todolist key={tl.id}
                      id={tl.id}
                      title={tl.title}
                      tasks={tl.tasks}
      />);
    return (
      <>
        {this.props.loading ? <Preloader/> :
          <div className={style.wrap}>
            <div className={style.AddList}>
              <AddNewItemForm addItem={this.onAddTodoList}/>
            </div>
            <div className={style.wrap_todolists}>
              {todoListsElements}
            </div>
          </div>

        }
      </>

    );

  }
}

let mapStateToProps = ({todolists}) => {

  return {
    todoLists: todolists.todoLists,
    nextTodolistId: todolists.nextTodolistId,
    loading: todolists.loading,
    filterValue: todolists.filterValue
  }

};


export default connect(mapStateToProps, {Add_TodoList, get_TodoLists})(Tuesday);


/* saveState = () => {
       LocalStorage.saveTodoLists(this.state);
   };*/


/* restoreState = () => {
     let todoLists = LocalStorage.getTodoLists();
     if (todoLists != null) {
         this.setState(todoLists);
     }
 };*/

/*let mapDispatchToProps = (dispatch) => {
    return {
        addTodoList: (newTodoList) => {

            const action = {
                type: 'ADD-TODOLIST',
                newTodoList: newTodoList
            };

            dispatch(action)
        },
    loadContent:()=>{
            const action={
                type:'SET_LOADING'
            };
        dispatch(action)
    }

    }
};*/