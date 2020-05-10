import {HashRouter, Route} from "react-router-dom";
import Tuesday from '../Tuesday/Tuesday';
import Monday from './../Monday/Monday';
import NavBar from './../Navbar/Navbar';
import React from 'react';
import style from './Main.module.css'
import StartComponent from "../StartComponent/StartComponent";
import Wednesday from "../Wednesday/Wednesday";

class Main extends React.Component {
    state = {
        isHidden: false
    };
    onClickIsShow = () => {
        this.setState({isHidden: true})
    };
    onClickIsHidden = () => {
        this.setState({isHidden: false})
    };

    render = () => {

        return (
            <HashRouter>
                <div className={style.wrap__main}>
                    <div className={style.nav}>
                        {!this.state.isHidden && <div className={style.wrap_wrap_navbar}>
                            <NavBar/>
                        </div>}

                        {!this.state.isHidden &&
                        <button className={style.b}
                                onClick={this.onClickIsShow}>hide</button>}
                        {this.state.isHidden
                        && <button className={style.b2}
                                   onClick={this.onClickIsHidden}>show</button>}
                    </div>
                    <div className={style.wrap__days}>
                        <Route path='/Menu' render={() => <StartComponent/>}/>
                        <Route path='/Monday' render={() => <Monday/>}/>
                        <Route path='/tuesday' render={() => <Tuesday/>}/>
                        <Route path='/wednesday' render={() => <Wednesday/>}/>
                        <Route path='/thursday' render={() => <StartComponent/>}/>
                        <Route path='/friday' render={() => <StartComponent/>}/>
                    </div>

                </div>


            </HashRouter>

        );
    };
}

export default Main;