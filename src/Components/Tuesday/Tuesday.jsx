import React from 'react';
import style from './Tuesday.module.css';
import Preloader from "../../OutsideComponents/Preloader/Preloader";
import AddNewItemForm from "./AddNewItemForm/AddNewItemForm";
import Todolist from "./Todolist/Todolist";
import {connect} from "react-redux";
import {addTodoList, loadContent} from "../../Redux/reducers/todoListReducer";

class Tuesday extends React.Component {
    constructor(props) {
        super(props);
    }

    /*nextTodolistId = 0;
    state = {
        todoLists: [
            {
                title: 'every day',
                id: 1
            }
        ],
        loading: true,

    };*/

    componentDidMount() {
        setTimeout(() => {
            this.props.loadContent();
           /* this.setState({loading: false});*/
        }, 3000);
    }



    onAddTodoList = (title) => {
        const newTodoList = {
            title: title,
            id: this.props.nextTodolistId,
            tasks: []
        };
        this.props.addTodoList(newTodoList);
       /* this.nextTodolistId++;*/
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
                        <div>
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


export default connect(mapStateToProps,{addTodoList, loadContent} )(Tuesday);


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