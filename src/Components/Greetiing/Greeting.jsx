import React from 'react';
import style from './Greeting.module.css';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

    }

    newUserName = React.createRef();

    onAddNewUserNameClick = () => {
        let userName = this.newUserName.current.value;
        this.newUserName.current.value = '';
        this.props.addName(userName)
    };
    onChangeNameInput = () => {
        let checkName = this.newUserName.current.value;
        this.props.changeStatusButton(checkName)

    };

    render = () => {

        return (

            <div className={style.Wrap}>
                <span className={style.Counter}> {this.props.counter} </span>
                <h3 className={style.say}>Ну,рассказывай,как тебя зовут или кличут?</h3>
                <input ref={this.newUserName} onChange={this.onChangeNameInput}
                />
                <button className={style.Click} onClick={this.onAddNewUserNameClick}
                        disabled={this.props.addNameButtonStatus}> hello
                </button>


            </div>


        );
    }
}

export default Greeting;

