import { IA } from 'app/shared/model/MyApp/a.model';

export interface IB {
  id?: number;
  a?: IA;
}

export const defaultValue: Readonly<IB> = {};
