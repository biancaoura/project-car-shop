import { NextFunction, Request, Response } from 'express';
import StatusCodes from '../Utils/StatusCodes';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create(): Promise<void> {
    try {
      const newCar = await this.service.create(this.req.body);
      this.res.status(StatusCodes.CREATED).json(newCar);
    } catch (err) {
      this.res.status(StatusCodes.INTERNAL_SERVER_ERROR);
      this.next(err);
    }
  }
}