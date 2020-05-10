import React from "react";
let style=require('./AddNewItemForm.module.css');

type stateType={
  error: boolean,
  title: string,
  inputEmptyDisable: boolean
}


type propsType={
  addItem:(newText:string)=>void;

}


class AddNewItemForm extends React.Component<propsType,stateType> {


    state = {
        error: false,
        title: "",
        inputEmptyDisable: false
    };

    onAddItem = () => {
        let newText = this.state.title;
        this.setState({title: ""});

        if (newText === "") {
            this.setState({error: true, inputEmptyDisable: true});
        } else {
            this.setState({error: false});
            // передаём новый текст наружу
            this.props.addItem(newText);
        }
    };

    onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            error: false,
            title: e.currentTarget.value,
            inputEmptyDisable: false
        });
    };

    onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.onAddItem()
        }
    };


    render = () => {
        let classNameForInput = this.state.error ? style.error : "";

        return (
            <div className={style.todoList_newTaskForm}>
                <input className={classNameForInput} type="text" placeholder="New item name"
                       onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}
                />
                <button onClick={this.onAddItem} disabled={this.state.inputEmptyDisable}>Add</button>
            </div>

        );
    }
}

export default AddNewItemForm;