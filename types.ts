export interface Model {
  name: string;
  age: number;
  image: string;
}

export type Country = 
  | 'Togo' 
  | 'Benin' 
  | 'Mali' 
  | 'Burkina Faso' 
  | 'Cameroun' 
  | "Côte d'ivoire" 
  | 'Sénégal' 
  | 'Niger' 
  | 'Gabon';

export type AgeRange = '18-24' | '25-34' | '35+';

export enum Step {
  Country = 0,
  Age = 1,
  Success = 2
}