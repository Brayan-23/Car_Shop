import { NextFunction, Request, Response } from 'express';
import MotorService from '../Services/MotorcycleService';

export default class MotorController {
  public req: Request;
  public res: Response;
  public next: NextFunction;
  private motorService = new MotorService();

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create() {
    const { body } = this.req;
    const result = await this.motorService.create({ ...body });
    return this.res.status(201).json(result);
  }

  public async getAllAndId() {
    const { id } = this.req.params;
    const result = await this.motorService.getAllAndId(id);
    if (result === 'Deu Erro') {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    } if (result === null) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(result);
  }

  public async updateId() {
    const { id } = this.req.params;
    const { body } = this.req;
    const result = await this.motorService.updateId(id, { ...body });
    if (result === 'Deu Erro') {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    } if (result === null) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(result);
  }
}