import { Record } from 'immutable';

const uuid = require('uuid/v4');

export const EducationModel = Record({
  id: uuid(),
  center: '',
  studies: '',
  startDate: '',
  endDate: '',
  description: ''
});