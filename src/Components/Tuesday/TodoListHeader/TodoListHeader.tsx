import React from 'react';
let style=require('./TodoListHeader.module.css')

type stateType={
  editMode: boolean
  title: string
}

type propsType={
  title:string,
  changeTitleList:(title:string)=>void,
  onDelete:()=>void
}

class TodoListHeader extends React.Component<propsType,stateType> {
  state = {
    editMode: false,
    title: this.props.title,
  };

  activatedEditMode = () => {
    this.setState({editMode: true})
  }

  deactivatedEditMode = () => {
    this.setState({editMode: false});
    this.props.changeTitleList(this.state.title);

  }
  onTitleListChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: e.currentTarget.value})
  }

  render = () => {
    return (

      <div className={style.todoListHeader}>
        {this.state.editMode ?
          <input className={style.todoListTitle} autoFocus={true}
                 onBlur={this.deactivatedEditMode}
                 onChange={this.onTitleListChanged}
                 value={this.state.title}/> :
          <div>
            <h3 className={style.todoListHeaderTitle} onClick={this.activatedEditMode}>
              {this.state.title}</h3>
            <span className={style.button_delete}>
          <button onClick={this.props.onDelete}>X</button>
          </span>
          </div>
        }
      </div>

    );
  }
}

export default TodoListHeader;

