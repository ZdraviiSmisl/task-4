import React from 'react';
import style from './Wednesday.module.css'
import {connect} from "react-redux";
import {setStyle} from "../../Redux/reducers/settingsReducer";
import axios from 'axios';


const Wednesday = (props) => {
  const DARK_THEME = 'DARK_THEME';
  const LIGHT_THEME = 'LIGHT_THEME';
  const GREEN_THEME = 'GREEN_THEME';


  let status = false;
  const toggleCheckbox = (e) => {
    status = e.currentTarget.checked;
  }

  const requestToServer = (status) => {
   return  axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,
      {success: status}
    )
  }

  const tryCatch = async () => {
    try {
      const response = await requestToServer(status);
      console.log('answer:', response.data);
      return response;
    } catch (e) {
      console.log('error:', {...e});
      return 'error';
    }
  }


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
      <input type='checkbox' onChange={toggleCheckbox}/>
      <button onClick={tryCatch}>Send</button>
    </div>

  )
}

let mapStateToProps = ({settings}) => {
  return {
    theme: settings.theme
  }
}

export default connect(mapStateToProps, {setStyle})(Wednesday);

