import { Record, Map, List } from 'immutable';
import { AptitudModel } from './AptitudModel';
import { EducationModel } from './EducationModel';
import { InformationModel } from './InformationModel';
import { RecommendationModel } from './RecommendationModel';
import { WorkExperienceModel } from './WorkExperienceModel';

export const CVModel = Record({
  information: Map(),
  education: List(),
  workExperience: List(),
  aptitudes: List(),
  recommendations: List()
});

export const initialStateCV = new CVModel({
  information: new InformationModel(),
  education: List().push(new EducationModel()),
  workExperience: List().push(new WorkExperienceModel()),
  aptitudes: List().push(new AptitudModel()),
  recommendations: List().push(new RecommendationModel())
});