import { ADD_INFO, ADD_EDUCATION, ADD_WORK, ADD_APTITUDE, ADD_RECOMMENDATION } from './actionTypes';

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