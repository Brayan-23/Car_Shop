import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(obj: ICar) {
    super({
      model: obj.model,
      year: obj.year,
      color: obj.color,
      status: obj.status,
      buyValue: obj.buyValue,
      id: obj.id,
    });
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  getdoorsQty() {
    return this.doorsQty;
  }
  getSeatsQty() {
    return this.seatsQty;
  }
}