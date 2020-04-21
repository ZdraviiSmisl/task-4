import React from 'react';
import style from './Wednesday.module.css'
import {connect} from "react-redux";
import {setStyle} from "../../Redux/reducers/settingsReducer";
import axios from 'axios';

const DARK_THEME = 'DARK_THEME';
const LIGHT_THEME = 'LIGHT_THEME';
const GREEN_THEME = 'GREEN_THEME';

class Wednesday extends React.Component {

  state = {
    status: false
  }


  toggleCheckbox = (e) => {
    let status = e.currentTarget.checked;
    this.setState({
      status: status
    })
  }

  requestToServer = (status) => {
    return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,
      {success: status}
    )

  }

  tryCatch = async () => {
    try {
      const response = await this.requestToServer(this.state.status);
      console.log('answer:', response.data);
      return response;
    } catch (e) {
      console.log('error:', {...e});
      return 'error';
    }
  }


  setTheme = (e) => {
    let selectedTheme;
    if (e.currentTarget.checked) {
      selectedTheme = e.currentTarget.value;
    }
    this.props.setStyle(selectedTheme);
  }

  render() {


    return (
      <div className={`${style.wrap__inputRadio} ${style[this.props.theme]}`}>
        <label>Dark Theme <input name='them'
                                 type='radio'
                                 value={DARK_THEME}
                                 checked={this.props.theme === DARK_THEME}
                                 onChange={this.setTheme}/></label>
        <label>Light Theme<input name='them'
                                 type='radio'
                                 value={LIGHT_THEME}
                                 checked={this.props.theme === LIGHT_THEME}
                                 onChange={this.setTheme}/></label>
        <label>Green Theme<input name='them'
                                 type='radio'
                                 value={GREEN_THEME}
                                 checked={this.props.theme === GREEN_THEME}
                                 onChange={this.setTheme}/></label>
        <input type='checkbox' checked={this.state.status} onChange={this.toggleCheckbox}/>
        <button onClick={this.tryCatch}>Send</button>
      </div>

    )
  }
}

const mapStateToProps = ({settings}) => {
  return {
    theme: settings.theme
  }
}


export default connect(mapStateToProps, {setStyle})(Wednesday);

