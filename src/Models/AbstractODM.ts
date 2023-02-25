import { Model, Schema, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;

  constructor(
    protected collection: string,
    protected schema: Schema,

  ) {
    this.model = models[collection] || model(collection, schema);
  }

  public async create(newVehicle: T): Promise<T> {
    return this.model.create(newVehicle);
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(id: string, newInfo: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, newInfo, { new: true });
  }
}