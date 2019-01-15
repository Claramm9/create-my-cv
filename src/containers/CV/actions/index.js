import { ADD_INFO, ADD_EDUCATION } from './actionTypes';

export const addInfo = info => ({
    type: ADD_INFO,
    payload: info
});

export const addEducation = info => ({
    type: ADD_EDUCATION,
    payload: info
});