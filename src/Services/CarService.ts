import CarModel from '../Models/CarModel';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import HttpError from '../Utils/HttpError';
import StatusCodes from '../Utils/StatusCodes';

export default class CarService {
  private model;

  constructor() { this.model = new CarModel(); }

  public async create(car: Omit<ICar, 'id'>):Promise<Car> {
    const newCar = await this.model.create(car);
    return new Car(newCar);
  }

  public async getAll(): Promise<Car[]> {
    const cars = await this.model.getAll();
    return cars.map((car: ICar) => new Car(car));
  }

  public async getById(id: string): Promise<Car> {
    const car = await this.model.getById(id);

    if (!car) throw new HttpError(StatusCodes.NOT_FOUND, 'Car not found');

    return new Car(car);
  }

  public async update(id: string, newInfo: ICar) {
    const updatedCar = await this.model.update(id, newInfo);
    
    if (!updatedCar) throw new HttpError(StatusCodes.NOT_FOUND, 'Car not found');

    return this.create(updatedCar);
  }
}