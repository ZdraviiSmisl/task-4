import React from 'react';
import style from './Friend.module.css';



const Friend = (props) => {


    return (

        <div className={style.Friend}>
            {props.name}
        </div>


    );
};


export default Friend;

