import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import StatusCodes from '../Utils/StatusCodes';
import MotorcycleService from '../Services/MotorcycleService';
import HttpError from '../Utils/HttpError';

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

  public async getAll(): Promise<void> {
    try {
      const bikes = await this.service.getAll();
      this.res.status(StatusCodes.OK).json(bikes);
    } catch (err) {
      this.res.status(StatusCodes.INTERNAL_SERVER_ERROR);
      this.next(err);
    }
  }

  public async getById(): Promise<void> {
    try {
      const { id } = this.req.params;

      if (!isValidObjectId(id)) {
        throw new HttpError(StatusCodes.UNPROCESSABLE_ENTITY, 'Invalid mongo id');
      }

      const bike = await this.service.getById(id);

      this.res.status(StatusCodes.OK).json(bike);
    } catch (err) {
      this.next(err);
    }
  }
}