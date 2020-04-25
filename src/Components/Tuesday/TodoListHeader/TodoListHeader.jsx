import React from 'react';
import style from './TodoListHeader.module.css'

class TodoListHeader extends React.Component {
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
  onTitleListChanged = (e) => {
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

