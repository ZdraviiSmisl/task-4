import React from 'react';
import SkillComponent from './Skill/SkillComponent';
import style from './StyleSkills.module.css'

const SkillsComponent = (props) => {
    debugger;


    const skillElements = props.skills.map(skill => <SkillComponent key={skill.id} title={skill.title}/>);

    return (
        <div className={style.skills}>
            <h4 className={style.h4}>My Skills</h4>
            {skillElements}
        </div>
    );
};


export default SkillsComponent;