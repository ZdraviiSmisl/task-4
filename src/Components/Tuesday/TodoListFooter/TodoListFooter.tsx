import React from 'react';

let style = require('./TodoListFooter.module.css');

type stateType = {
    isHidden: boolean
}
type propsType = {
    filterValue: string,
    changeFilter: (newFilterValue: string) => void
}

class TodoListFooter extends React.Component<propsType, stateType> {
    state = {
        isHidden: false
    };
    onAllFilterClick = () => {
        this.props.changeFilter('All')
    };
    onCompletedFilterClick = () => {
        this.props.changeFilter('Completed')
    };
    onActiveFilterClick = () => {
        this.props.changeFilter('Active')
    };
    onClickIsHidden = () => {
        this.setState({isHidden: false})
    };

    onClickIsShow = () => {
        this.setState({isHidden: true})
    };
    render = () => {
        let classForAll = this.props.filterValue === 'All' ? style.filterActive : '';
        let classForCompleted = this.props.filterValue === 'Completed' ? style.filterActive : '';
        let classForActive = this.props.filterValue === 'Active' ? style.filterActive : '';
        return (

            <div className="todoList-footer">
                {!this.state.isHidden && <div className={style.wrap_buttons}>
                    <button className={classForAll}
                            onClick={this.onAllFilterClick}>All
                    </button>
                    <button className={classForCompleted}
                            onClick={this.onCompletedFilterClick}>Completed
                    </button>
                    <button className={classForActive}
                            onClick={this.onActiveFilterClick}>Active
                    </button>
                    {!this.state.isHidden &&
                    <button className={style.button__show}
                            onClick={this.onClickIsShow}>hide</button>}
                </div>}
                {this.state.isHidden &&
                <button className={style.button__show}
                        onClick={this.onClickIsHidden}>show</button>}
            </div>
        );
    }
}

export default TodoListFooter;
