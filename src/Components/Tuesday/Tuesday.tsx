import React from "react";
import Preloader from "../../OutsideComponents/Preloader/Preloader";
import AddNewItemForm from "./AddNewItemForm/AddNewItemForm";
import Todolist from "./Todolist/Todolist";
import {connect} from "react-redux";
import {Add_TodoList, get_TodoLists} from "../../Redux/reducers/todoListReducer";
import {TodoStateType} from "../../Redux/Store";
import {TodoType} from "../types/entities";
let style=require('./Tuesday.module.css') ;

type MapStatePropsType={
  todoLists: Array<TodoType>
  nextTodolistId: number,
  loading: boolean
  filterValue: string
}


type MapDispatchPropsType={
  get_TodoLists:()=>void,
  Add_TodoList:(title:string)=>void


}
class Tuesday extends React.Component<MapStatePropsType & MapDispatchPropsType> {


  componentDidMount() {
this.props.get_TodoLists();
  }

  onAddTodoList = (title:string) => {
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

let mapStateToProps = ({todolists}:TodoStateType):MapStatePropsType => {

  return {
    todoLists: todolists.todoLists,
    nextTodolistId: todolists.nextTodolistId,
    loading: todolists.loading,
    filterValue: todolists.filterValue
  }

};



export default connect<MapStatePropsType,MapDispatchPropsType,{},TodoStateType>(mapStateToProps, {Add_TodoList, get_TodoLists})(Tuesday);

