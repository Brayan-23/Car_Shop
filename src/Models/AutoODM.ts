import { Model, Schema, models, model } from 'mongoose';

export default abstract class AutoODM<T> {
  private schema: Schema<T>;
  private _model: Model<T>;
  private modelName: string;
      
  constructor(schema: Schema<T>, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this._model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    const result = await this._model.create({ ...obj });
    return result;
  }

  public async getAll(): Promise<T[]> {
    const result = await this._model.find();
    return result;
  }

  public async findById(id: string): Promise<T | null> {
    const result = await this._model.findById(id);
    return result;
  }
  async updatedId(id: string, obj: T): Promise<T | null> {
    const result = await this._model.findByIdAndUpdate({ id }, { obj });
    return result;
  }
}