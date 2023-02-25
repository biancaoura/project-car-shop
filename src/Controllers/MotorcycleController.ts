import { NextFunction, Request, Response } from 'express';
import StatusCodes from '../Utils/StatusCodes';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create(): Promise<void> {
    try {
      const newBike = await this.service.create(this.req.body);

      this.res.status(StatusCodes.CREATED).json(newBike);
    } catch (err) {
      this.res.status(StatusCodes.INTERNAL_SERVER_ERROR);
      this.next(err);
    }
  }
}