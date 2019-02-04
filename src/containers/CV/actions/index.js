import {
  ADD_INFO, ADD_EDUCATION, ADD_WORK, ADD_APTITUDE, 
  ADD_RECOMMENDATION, UPDATE_FIELD, DELETE_APTITUDE 
} from './actionTypes';

export const addInfo = info => ({
  type: ADD_INFO,
  payload: info
});

export const addEducation = info => ({
  type: ADD_EDUCATION,
  payload: info
});

export const addWork = info => ({
  type: ADD_WORK,
  payload: info
});

export const addAptitud = info => ({
  type: ADD_APTITUDE,
  payload: info
});

export const addRecommendation = info => ({
  type: ADD_RECOMMENDATION,
  payload: info
});

export const updateField = (info, title) => ({
  type: UPDATE_FIELD,
  payload: info,
  title
});

export const deleteAptitud = aptitudes => ({
  type: DELETE_APTITUDE,
  payload: aptitudes
});