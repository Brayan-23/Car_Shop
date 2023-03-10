import IMotocycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(obj: IMotocycle) {
    super({
      model: obj.model,
      year: obj.year,
      color: obj.color,
      status: obj.status,
      buyValue: obj.buyValue,
      id: obj.id,
    });
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }

  getCategory() {
    return this.category;
  }
  getEngineCapacity() {
    return this.engineCapacity;
  }
}