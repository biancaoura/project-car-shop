import MotorcycleModel from '../Models/MotorcycleModel';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';

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
}