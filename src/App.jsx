import React from 'react';
import style from './App.module.css';
import Main from './Components/Main/Main';


class App extends React.Component {

    render = () => {

        return (

            <div className={style.App}>
                <Main/>
            </div>


        );
    };
}

export default App;

