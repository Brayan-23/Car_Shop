import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private carros = new CarModel();

  createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(obj: ICar) {
    if ('status' in obj) {
      const createBD = await this.carros.create(obj);
      return this.createCarDomain(createBD);
    } 
    const createdBD = await this.carros.create({ ...obj, status: false });
    return this.createCarDomain(createdBD);
  }

  public async getAllAndId(id: string | undefined) {
    if (!id) {
      const returnDB = await this.carros.getAll();
      return returnDB.map((elem) => this.createCarDomain(elem));
    } 
    try {
      const returnDB = await this.carros.findById(id);
      return this.createCarDomain(returnDB);
    } catch (error) {
      return 'Deu Erro';
    }
  }
  public async updateId(id: string, obj: ICar) {
    try {
      await this.carros.updatedId(id, obj);
      const result = await this.carros.findById(id);
      return this.createCarDomain(result);
    } catch (error) {
      return 'Deu Erro';
    }
  }
}