/* eslint-disable array-callback-return */
/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
import { initialStateCV } from '../models/index';
import {
  ADD_INFO, ADD_EDUCATION, ADD_WORK, ADD_APTITUDE, 
  ADD_RECOMMENDATION, UPDATE_FIELD, DELETE_APTITUDE 
} from '../actions/actionTypes';

const cvReducer = (state = initialStateCV, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_INFO:
      return state.set('information', action.payload);

    case ADD_EDUCATION:
      return state.update('education', (educ) => educ.push(action.payload));

    case ADD_WORK:
      return state.update('workExperience', work => work.push(action.payload));

    case ADD_APTITUDE:
      return state.update('aptitudes', (aptitudes) => aptitudes.push(action.payload));

    case ADD_RECOMMENDATION:
      return state.update('recommendations', (recommendations) => recommendations.push(action.payload));

    case UPDATE_FIELD:
      if (action.title === 'education') {
        return state.set('education', action.payload);
      } if (action.title === 'workExperience') {
        return state.set('workExperience', action.payload);
      } if (action.title === 'recommendation') {
        return state.set('recommendations', action.payload);
      }
      break;

    case DELETE_APTITUDE:
      return state.set('aptitudes', action.payload);

    default:
      return state;
  }
};

export default cvReducer;