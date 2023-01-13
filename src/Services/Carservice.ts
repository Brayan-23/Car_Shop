/* import AutoFactory from '../Domains/AutoFactory'; */
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
/* import ICarMongo from '../Interfaces/ICarMongo'; */
import CarModel from '../Models/Car';

export default class CarService {
  private carros = new CarModel();

  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(obj: ICar) {
    /* const car = AutoFactory.create(obj); */
    if ('status' in obj) {
      const createBD = await this.carros.create(obj);
      return this.createCarDomain(createBD);
    } 
    const createdBD = await this.carros.create({ ...obj, status: false });
    return this.createCarDomain(createdBD);
  }
}