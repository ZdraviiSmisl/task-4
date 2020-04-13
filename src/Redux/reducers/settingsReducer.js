export const SET_STYLE = 'SET_STYLE';


export const setStyle = (selectedTheme) => ({type: SET_STYLE, selectedTheme});

const initialState = {
  theme: 'DARK_THEME'

};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_STYLE:
      return {
        ...state,
        theme: action.selectedTheme
      }
    default:
      return state

  }
}


export default settingsReducer;