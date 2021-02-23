import darkReducer from './isDark';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    isDark: darkReducer
});

export default allReducer