import React from 'react';
import style from './Monday.module.css';
import Greeting from './../Greetiing/Greeting';
import SkillsComponent from './../Skills/SkillsComponent';
import AddNewFriend from './../AddNewFriend/AddNewFriend';

class Monday extends React.Component {
    state = {
        counter: 1,
        names: [],
        skills: [{id: 1, title: 'Курящий спортсмен'}, {id: 2, title: 'Упор(ный)отый'}, {
            id: 3,
            title: 'Carolina Reaper-one love'
        }],
        addNameButtonStatus: true
    };

    addName = (userName) => {
        let newName = {
            id: this.state.counter,
            name: userName

        };
        alert(`Тут бесплатно не наливают: ${userName}`);
        let newNames = [...this.state.names, newName];
        this.setState({
            names: newNames, counter: this.state.counter + 1, addNameButtonStatus: true
        });
    };
    changeStatusButton = (checkName) => {
        if (checkName === '') {
            this.setState({addNameButtonStatus: true})
        } else {
            this.setState({addNameButtonStatus: false})
        }
    };

    render() {
        return (
            <div>
                <div className={style.Wrap}>
                    <span className={style.name}>Здравствуй, меня зовут Арапов Евгений Владимирович</span>
                    <h5 className={style.h5}>Я за минимализм</h5>
                    <Greeting addName={this.addName} counter={this.state.counter}
                              changeStatusButton={this.changeStatusButton}
                              addNameButtonStatus={this.state.addNameButtonStatus}/>
                    <SkillsComponent skills={this.state.skills}/>
                    <AddNewFriend names={this.state.names}/>
                </div>
            </div>

        )
    }

}

export default Monday;