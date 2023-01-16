import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/Carservice';

export default class CarController {
  public req: Request;
  public res: Response;
  public next: NextFunction;
  private carService = new CarService();

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create() {
    const { body } = this.req;
    const result = await this.carService.create({ ...body });
    return this.res.status(201).json(result);
  } 

  public async getAllAndId() {
    const { id } = this.req.params;
    const result = await this.carService.getAllAndId(id);
    if (result === 'Deu Erro') {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    } if (result === null) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(result);
  }
  public async updateId() {
    const { id } = this.req.params;
    const { body } = this.req;
    const result = await this.carService.updateId(id, { ...body });
    if (result === 'Deu Erro') {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    } if (result === null) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(result);
  }
}