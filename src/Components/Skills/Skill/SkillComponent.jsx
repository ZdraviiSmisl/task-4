import  React from 'react';
import style from './StyleSkill.module.css'
const SkillComponent =(props)=> {
debugger;

    return (
    <div className={style.skill}>

        <span>{props.title}</span>


    </div>
    )
};

export default SkillComponent;