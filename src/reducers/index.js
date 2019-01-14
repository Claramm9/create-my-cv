import { combineReducers } from 'redux';
import cvReducer from '../containers/CV/reducers/index';

const rootReducer = combineReducers({
    Cv: cvReducer
});

export default rootReducer;