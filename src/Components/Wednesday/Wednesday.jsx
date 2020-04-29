import React from 'react';
import style from './Wednesday.module.css'
import {connect} from "react-redux";
import {setStyle} from "../../Redux/reducers/settingsReducer";
import {tryCatch} from "../../DAL/api2";
import Preloader from "../../OutsideComponents/Preloader/Preloader";


const DARK_THEME = 'DARK_THEME';
const LIGHT_THEME = 'LIGHT_THEME';
const GREEN_THEME = 'GREEN_THEME';

class Wednesday extends React.Component {

  state = {
    status: false,
    loading: false,
    message: 'new message',
    buttonStatus: false
  }

  functionRequest = () => {
    this.setState({loading: true, buttonStatus: true}, async () => {
      let response = await tryCatch(this.state.status);
      this.setState({
        message: response,
        loading: false,
        buttonStatus: false
      })
    })
  }

  toggleCheckbox = (e) => {
    let status = e.currentTarget.checked;
    this.setState({
      status: status
    })
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

      <div className={style.infoServer__wrap}>
        <div className={style.infoServer__discr}>
          {this.state.loading ? <Preloader/> :
            <div className={style.infoServer__text}>{this.state.message}</div>
          }
        </div>
        <div className={style.infoServer__panel}>
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
            <button onClick={this.functionRequest} disabled={this.state.buttonStatus}>Send</button>

          </div>
        </div>
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

