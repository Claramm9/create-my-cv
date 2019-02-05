import { Record, List } from 'immutable';

export const CVModel = Record({
  information: null,
  education: List(),
  workExperience: List(),
  aptitudes: List(),
  recommendations: List()
});

export const initialStateCV = new CVModel();