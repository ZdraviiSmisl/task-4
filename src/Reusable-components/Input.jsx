import React from "react";
import style from './Input.module.css';

class Input extends React.Component {
    state = {
        error: false

    }




    onPressEnter = (e) => {
        if (e.key === 'Enter') alert('ты клацнул по Enter');
    }

    render() {
        return (
            <div className={style.InputWrap}>
                <input onKeyPress={this.onPressEnter}
                       onChange={this.props.onChangeNameInput}
                       className={style.Input}
                       type="text"
                       placeholder="нет времени объяснять,пиши сюда!"
                       value={this.props.value}/>

            </div>


        );
    }
}

export default Input;