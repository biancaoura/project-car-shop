import CarModel from '../Models/CarModel';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';

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
}