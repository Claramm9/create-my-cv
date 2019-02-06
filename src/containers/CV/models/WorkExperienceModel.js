import { Record } from 'immutable';

const uuid = require('uuid/v4');

export const WorkExperienceModel = Record({
  id: uuid(),
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  description: ''
});