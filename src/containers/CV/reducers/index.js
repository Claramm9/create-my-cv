import { initialStateCV } from '../models/index';
import { ADD_INFO, ADD_EDUCATION } from '../actions/actionTypes';

const cvReducer = (state = initialStateCV, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_INFO:
            return state.set('information', action.payload);
        case ADD_EDUCATION:
            const newData = state.get('education').push(action.payload);
            debugger
            const sortData = newData.sort((a, b) => {
                if(new Date(a.get('endDate')) < new Date(b.get('endDate'))){
                    return -1;
                  }
                  if(new Date(a.get('endDate')) > new Date(b.get('endDate'))){
                    return 1;
                  }
                  if(new Date(a.get('endDate')) === new Date(b.get('endDate'))){
                    return 0;
                  }
            });
            return state.set('education', sortData);
        default:
            return state;
    }
}

export default cvReducer;