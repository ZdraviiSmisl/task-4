import  React from 'react';
import style from './StyleSkill.module.css'
const SkillComponent =(props)=> {


    return (
    <div className={style.skill}>

        <span>{props.title}</span>


    </div>
    )
};

export default SkillComponent;