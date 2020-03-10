import {HashRouter, Route} from "react-router-dom";
import Tuesday from './../Tuesday/Tuesday';
import Monday from './../Monday/Monday';
import NavBar from './../Navbar/Navbar';
import React from 'react';
import style from './Main.module.css'
import StartComponent from "../StartComponent/StartComponent";

class Main extends React.Component {
    state = {
        isHidden: false
    }
    onClickIsShow = () => {
        this.setState({isHidden: true})
    };
    onClickIsHidden=()=>{
        this.setState({isHidden:false})
    };

    render = () => {

        return (
            <HashRouter>
                <div className={style.Wrap}>
                    {!this.state.isHidden && <div>
                        <NavBar/>
                    </div>}

                    {!this.state.isHidden && <button className={style.b} onClick={this.onClickIsShow}>hide</button>}
                    {this.state.isHidden && <button className={style.b2} onClick={this.onClickIsHidden}>show</button>}
                  {/*  <Route path='/' render={() => <StartComponent/>}/>*/}
                    <Route path='/Monday' render={() => <Monday/>}/>
                    <Route path='/tuesday' render={() => <Tuesday/>}/>
                    <Route path='/wednesday' render={() => <StartComponent/>}/>
                    <Route path='/thursday' render={() => <StartComponent/>}/>
                    <Route path='/friday' render={() => <StartComponent/>}/>

                </div>


            </HashRouter>

        );
    };
}

export default Main;