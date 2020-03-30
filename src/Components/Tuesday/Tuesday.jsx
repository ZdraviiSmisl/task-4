import React from 'react';
import style from './Tuesday.module.css';
import {LocalStorage} from "../../OutsideComponents/LocalStorage";
import Preloader from "../../OutsideComponents/Preloader/Preloader";
import AddNewItemForm from "./AddNewItemForm/AddNewItemForm";
import Todolist from "./Todolist/Todolist";

class Tuesday extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        todolists: [
            {
                title: 'every day',
                id: 1
            }
        ],
        loading:true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 3000);
        this.restoreState();
    }

    saveState = () => {
        LocalStorage.saveTodoLists(this.state);
    };

    restoreState = () => {
        let todolists = LocalStorage.getTodoLists();
        debugger
        if (todolists != null) {
            this.setState(todolists);
        }
    };

    onAddTodoList = (value) => {
        let lastElementIndex = this.state.todolists.length - 1;
        let nexId = this.state.todolists[lastElementIndex].id + 1;
        const newTodoList = {
            title: value,
            id: nexId
        };
        const todolists = [...this.state.todolists, newTodoList];
        this.setState({todolists: todolists}, () => this.saveState())
    };

    render() {
        const todoListsElements = this.state.todolists.map(
            tl => <Todolist key={tl.id} id={tl.id} title={tl.title}/>);
        return (
            <>
                {this.state.loading ? <Preloader/> :
                    <div className={style.wrap}>
                        <div>
                            <AddNewItemForm addItem={this.onAddTodoList}/>
                        </div>
                        <div className={style.wrap}>
                            {todoListsElements}
                        </div>
                    </div>

                }
            </>

        );

    }
}


export default Tuesday;