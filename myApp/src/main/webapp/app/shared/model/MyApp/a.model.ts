import { IB } from 'app/shared/model/MyApp/b.model';

export interface IA {
  id?: number;
  bs?: IB[];
}

export const defaultValue: Readonly<IA> = {};