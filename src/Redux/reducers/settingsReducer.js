import {api} from '../../DAL/api2';

export const SET_STYLE = 'SET_STYLE';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const CHANGE_BUTTON_STATUS = 'CHANGE_BUTTON_STATUS';
export const SET_MESSAGE = 'SET_MESSAGE';


const initialState = {
  theme: 'DARK_THEME',
  loading: false,
  buttonStatus: false,
  status: false,
  message: 'waiting for a new message'
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_STYLE:
      return {
        ...state,
        theme: action.selectedTheme
      }

    case TOGGLE_STATUS:
      return {
        ...state,
        status: action.status
      }

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading
      }

    case CHANGE_BUTTON_STATUS:
      return {
        ...state,
        buttonStatus: action.buttonStatus
      }

    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      }

    default:
      return state

  }
}
export const setStyle = (selectedTheme) => ({type: SET_STYLE, selectedTheme});
export const toggleStatus = (status) => ({type: TOGGLE_STATUS, status});
const loadRequest = (loading) => ({type: TOGGLE_LOADING, loading});
const changeButtonStatus = (buttonStatus) => ({type: CHANGE_BUTTON_STATUS, buttonStatus});
const setMassageRequest = (message) => ({type: SET_MESSAGE, message});


export const request_To_Server = () => async (dispatch, getState) => {
  dispatch(loadRequest(true));
  dispatch(changeButtonStatus(true));
  let currentStatus = getState().settings.status;
  const tryCatch = async (currentStatus) => {
    try {
      const response = await api.requestToServer(currentStatus);
      console.log('answer:', response.data);
      return response.data.info;
    } catch (e) {
      console.log('error:', {...e});
      return e.response.data.info;
    }
  }
  let result = await tryCatch(currentStatus);
  dispatch(setMassageRequest(result));
  dispatch(loadRequest(false));
  dispatch(changeButtonStatus(false));
}


export default settingsReducer;