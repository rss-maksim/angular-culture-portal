import { ActivityPlaceModel } from './activity-place.model';
import { WorksImagesModel } from './works-images.model';
import { WorksModel } from './works.model';
import { BiographyModel } from './biography.model';

export interface AuthorModel {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  placeOfBirth: string;
  years: string;
  image: string;
  biography: BiographyModel[];
  works?: WorksModel[];
  worksImages?: WorksImagesModel[];
  video?: string;
  activityPlace?: ActivityPlaceModel[];
}
