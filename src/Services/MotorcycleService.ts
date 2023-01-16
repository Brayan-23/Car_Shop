import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotocycleModel';
import Motorcycles from '../Domains/Motorcycles';

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
}