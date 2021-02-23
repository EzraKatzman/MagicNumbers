const darkReducer = (state=false, action) => {
    switch(action.type) {
        case 'INVERT':
            return !state;
        default:
            return state;
    }
}

export default darkReducer