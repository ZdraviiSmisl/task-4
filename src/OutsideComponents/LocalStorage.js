export const saveState = (state) => {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem('our-state', stateAsString)
};

export const restoreState = () => {
    let state = {
        tasks: [],
        filterValue: 'All'
    };
    let stateAsString = localStorage.getItem('our-state');
    if (stateAsString !== null) {
        state = JSON.parse(stateAsString);
    }
    return state;
};