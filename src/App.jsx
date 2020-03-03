import React from 'react';

import './App.css';
import Greeting from './Components/Greetiing/Greeting';
import SkillsComponent from './Components/Skills/SkillsComponent';
import AddNewFriend from './Components/AddNewFriend/AddNewFriend';

class App extends React.Component {
    state = {
        counter: 1,
        names: [],
        skills: [{id: 1, title: 'teetotal'}, {id: 2, title: 'smoker'}, {id: 3, title: 'homebody'}],

    };

    addName = (userName) => {
        let newName = {
            id: this.state.counter,
            name: userName

        };
        alert(`Ну,рассказывай ${userName}`);
        let newNames = [...this.state.names, newName];
        this.setState({
            names: newNames, counter: this.state.counter + 1
        });
    };


    render = () => {

        return (
            <div>
                <div className='App'>
                    <span className='name'>Здравствуй, меня зовут Арапов Евгений Владимирович</span>
                    <h5 className='h5'>Я за минимализм</h5>
                    <Greeting addName={this.addName} counter={this.state.counter}/>
                    <SkillsComponent skills={this.state.skills}/>
                    <AddNewFriend names={this.state.names}/>
                </div>
            </div>
        );
    };
}

export default App;

