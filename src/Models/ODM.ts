import { Model, Schema, model, models } from 'mongoose';

export default class ODM<T> {
  protected model: Model<T>;

  constructor(
    protected collection: string,
    protected schema: Schema,

  ) {
    this.model = models[collection] || model(collection, schema);
  }
}