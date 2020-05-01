import React from 'react';
import style from './Wednesday.module.css'
import {connect} from "react-redux";
import {request_To_Server, setStyle, toggleStatus} from "../../Redux/reducers/settingsReducer";
import Preloader from "../../OutsideComponents/Preloader/Preloader";


const DARK_THEME = 'DARK_THEME';
const LIGHT_THEME = 'LIGHT_THEME';
const GREEN_THEME = 'GREEN_THEME';

class Wednesday extends React.Component {


  functionRequest = () => {
    this.props.request_To_Server();
  }

  toggleCheckbox = (e) => {
    let status = e.currentTarget.checked;
    this.props.toggleStatus(status);
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
          {this.props.loading ? <Preloader/> :
            <div className={style.infoServer__text}>{this.props.message}</div>
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

            <input type='checkbox' checked={this.props.status} onChange={this.toggleCheckbox}/>
            <button className={style.btn} onClick={this.functionRequest} disabled={this.props.buttonStatus}>Send
            </button>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({settings}) => {
  return {
    theme: settings.theme,
    loading: settings.loading,
    message: settings.message,
    buttonStatus: settings.buttonStatus,
    status: settings.status
  }
}


export default connect(mapStateToProps, {setStyle, toggleStatus, request_To_Server})(Wednesday);

