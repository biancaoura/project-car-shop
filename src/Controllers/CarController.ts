import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import StatusCodes from '../Utils/StatusCodes';
import CarService from '../Services/CarService';
import HttpError from '../Utils/HttpError';
import ICar from '../Interfaces/ICar';

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

  public async getAll(): Promise<void> {
    try {
      const cars = await this.service.getAll();
      this.res.status(StatusCodes.OK).json(cars);
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
      
      const car = await this.service.getById(id);
      
      this.res.status(StatusCodes.OK).json(car);
    } catch (err) {
      this.next(err);
    }
  }

  public async update(): Promise<void> {
    try {
      const { id } = this.req.params;

      if (!isValidObjectId(id)) {
        throw new HttpError(StatusCodes.UNPROCESSABLE_ENTITY, 'Invalid mongo id');
      }

      const newInfo: ICar = this.req.body;

      const updatedCar = await this.service.update(id, newInfo);

      this.res.status(StatusCodes.OK).json(updatedCar);
    } catch (err) {
      this.next(err);
    }
  }
}