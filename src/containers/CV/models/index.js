import { Record, Map, List } from 'immutable';

export const CVModel = Record ({
    information: Map(),
    education: Map(),
    workExperience: Map(),
    aptitudes: List(),
    Recommendation: List()
});

export const initialStateCV = new CVModel();