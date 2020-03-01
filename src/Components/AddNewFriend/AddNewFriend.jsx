import React from 'react';
import style from './AddNewFriend.module.css';
import Friend from "./Friend/Friend";


class AddNewFriend extends React.Component {


    render = () => {
        let newFriend = this.props.names.map(n => <Friend key={n.id} name={n.name}/>);
        return (

            <div className={style.AddNewFriend}>
                <h3>Тут кантовался:</h3>
                <div className={style.wrap}>
                    {newFriend}
                </div>


            </div>


        );
    }
}

export default AddNewFriend;

