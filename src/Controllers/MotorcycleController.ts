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
}