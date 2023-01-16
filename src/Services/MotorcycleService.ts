import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotocycleModel';
import Motorcycles from '../Domains/Motorcycle';

export default class MotorService {
  private motos = new MotorcycleModel();
  
  createMotorDomain(motor: IMotorcycle | null): Motorcycles | null {
    if (motor) {
      return new Motorcycles(motor);
    }
    return null;
  }

  public async create(obj: IMotorcycle) {
    if ('status' in obj) {
      const createBD = await this.motos.create(obj);
      return this.createMotorDomain(createBD);
    } 
    const createdBD = await this.motos.create({ ...obj, status: false });
    return this.createMotorDomain(createdBD);
  }

  public async getAllAndId(id: string | undefined) {
    if (!id) {
      const returnDB = await this.motos.getAll();
      return returnDB.map((elem) => this.createMotorDomain(elem));
    } 
    try {
      const returnDB = await this.motos.findById(id);
      return this.createMotorDomain(returnDB);
    } catch (error) {
      return 'Deu Erro';
    }
  }

  public async updateId(id: string, obj: IMotorcycle) {
    try {
      await this.motos.updatedId(id, obj);
      const result = await this.motos.findById(id);
      return this.createMotorDomain(result);
    } catch (error) {
      return 'Deu Erro';
    }
  }
}