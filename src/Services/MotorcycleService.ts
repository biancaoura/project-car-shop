import MotorcycleModel from '../Models/MotorcycleModel';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import HttpError from '../Utils/HttpError';
import StatusCodes from '../Utils/StatusCodes';

export default class MotorcycleService {
  private model;

  constructor() { this.model = new MotorcycleModel(); }

  public async create(bike: Omit<IMotorcycle, 'id'>): Promise<Motorcycle> {
    const newBike = await this.model.create(bike);

    return new Motorcycle(newBike);
  }

  public async getAll(): Promise<Motorcycle[]> {
    const bikes = await this.model.getAll();
    return bikes.map((bike: IMotorcycle) => new Motorcycle(bike));
  }

  public async getById(id: string): Promise<Motorcycle> {
    const bike = await this.model.getById(id);

    if (!bike) throw new HttpError(StatusCodes.NOT_FOUND, 'Motorcycle not found');

    return new Motorcycle(bike);
  }

  public async update(id: string, newInfo: IMotorcycle) {
    const updatedBike = await this.model.update(id, newInfo);

    if (!updatedBike) throw new HttpError(StatusCodes.NOT_FOUND, 'Motorcycle not found');

    return this.create(updatedBike);
  }
}