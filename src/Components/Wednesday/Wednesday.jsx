import React from 'react';
import style from './Wednesday.module.css'
import {connect} from "react-redux";
import {setStyle} from "../../Redux/reducers/settingsReducer";


const Wednesday = (props) => {
  const DARK_THEME = 'DARK_THEME';
  const LIGHT_THEME = 'LIGHT_THEME';
  const GREEN_THEME = 'GREEN_THEME';

  const setTheme = (e) => {
    let selectedTheme;
    if (e.currentTarget.checked) {
      selectedTheme = e.currentTarget.value;
    }
    props.setStyle(selectedTheme);
  }
  return (
    <div className={`${style.wrap__inputRadio} ${style[props.theme]}`}>
     <label>Dark Theme <input name='them'
             type='radio'
             value={DARK_THEME}
             checked={props.theme === DARK_THEME}
             onChange={setTheme}/></label>
      <label>Light Theme<input name='them'
             type='radio'
             value={LIGHT_THEME}
             checked={props.theme === LIGHT_THEME}
             onChange={setTheme}/></label>
      <label>Green Theme<input name='them'
             type='radio'
             value={GREEN_THEME}
             checked={props.theme === GREEN_THEME}
             onChange={setTheme}/></label>
    </div>

  )
}

let mapStateToProps = ({settings}) => {
  return {
    theme: settings.theme
  }
}

export default connect(mapStateToProps, {setStyle})(Wednesday);

