import ICar from '../Interfaces/ICar';
import Car from './Car';

export default class AutoFactory {
  public static create(obj: ICar): ICar {
    const result = new Car({ ...obj });
    return result;
  }
}