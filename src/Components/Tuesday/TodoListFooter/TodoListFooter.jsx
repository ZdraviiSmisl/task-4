import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoListFooter.module.css';

class TodoListFooter extends React.Component {
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
                    {this.state.isHidden &&
                    <button className={style.button__show}
                            onClick={this.onClickIsHidden}>show</button>}
                </div>}

            </div>
        );
    }
}

export default TodoListFooter;
TodoListFooter.propTypes = {
    filterValue: PropTypes.string
};