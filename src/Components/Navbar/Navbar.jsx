import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    state = {
        selectedPage: ''
    };
    onSelected = (e) => {
        let page = e.currentTarget.getAttribute('href');
        this.setState({selectedPage: page})
    };

    render() {
        return (
            <nav className={style.WrapNavBar}>
                <h3>MENU</h3>
                <div className={style.item}>
                    <NavLink to='/Monday' onClick={this.onSelected} activeClassName={style.active}>Monday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/tuesday' onClick={this.onSelected} activeClassName={style.active}>Tuesday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/wednesday' onClick={this.onSelected}
                             activeClassName={style.active}>Wednesday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/thursday' onClick={this.onSelected} activeClassName={style.active}>Thursday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/friday' onClick={this.onSelected} activeClassName={style.active}>Friday</NavLink>
                </div>

            </nav>
        )
    }

}

export default NavBar;