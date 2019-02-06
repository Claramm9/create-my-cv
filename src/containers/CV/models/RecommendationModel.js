import { Record } from 'immutable';

const uuid = require('uuid/v4');

export const RecommendationModel = Record({
  id: uuid(),
  name: '',
  recommendation: ''
});