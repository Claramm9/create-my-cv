import { Record, Map, List } from 'immutable';

export const CVModel = Record({
  information: Map(),
  education: List(),
  workExperience: List(),
  aptitudes: List(),
  recommendations: List()
});

export const initialStateCV = new CVModel();