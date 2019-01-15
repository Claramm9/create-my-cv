import { Record, Map, List } from 'immutable';

export const CVModel = Record ({
    information: Map(),
    education: List(),
    workExperience: List(),
    aptitudes: List(),
    Recommendation: List()
});

export const initialStateCV = new CVModel();