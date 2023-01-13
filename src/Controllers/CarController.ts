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
}