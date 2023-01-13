import { IAuto } from './IAuto';

export default class Auto {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
 
  constructor(obj: IAuto) {
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status || false;
    this.buyValue = obj.buyValue;
    this.id = obj.id;
  }
}