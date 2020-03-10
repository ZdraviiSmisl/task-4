import React from 'react';
import style from './Greeting.module.css';
import Input from "../../Reusable-components/Input";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        value: ''
    }


    onAddNewUserNameClick = () => {
        let userName = this.state.value
        this.setState({value:''})
        this.props.addName(userName)
    };
    onChangeNameInput = (e) => {
        let checkName = e.currentTarget.value;
        this.setState({value: checkName})
        this.props.changeStatusButton(checkName)

    }



    render = () => {

        return (

            <div className={style.Wrap}>
                <span className={style.Counter}> {this.props.counter} </span>
                <h3 className={style.say}>Ну,рассказывай,как тебя зовут или кличут?</h3>
                <Input value={this.state.value} addName={this.props.addName} onChangeNameInput={this.onChangeNameInput}
                       addNameButtonStatus={this.props.addNameButtonStatus}/>
                <button className={style.Click} onClick={this.onAddNewUserNameClick}
                        disabled={this.props.addNameButtonStatus}> hello
                </button>


            </div>


        );
    }
}

export default Greeting;

