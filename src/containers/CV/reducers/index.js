import { initialStateCV } from '../models/index';
import { ADD_INFO } from '../actions/actionTypes';

const cvReducer = (state = initialStateCV, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_INFO:
            return state.set('information', action.payload);
        default:
            return state;
    }
}

export default cvReducer;