import { Schema } from 'mongoose';
import ODM from './ODM';
import ICar from '../Interfaces/ICar';

export default class CarModel extends ODM<ICar> {
  constructor() {
    const carSchema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: false },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super('Car', carSchema);
  }

  public async create(newCar: Omit<ICar, 'id'>): Promise<ICar> {
    return this.model.create(newCar);
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }
}