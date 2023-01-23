import { Model, UpdateQuery, Schema, models, model } from 'mongoose';

export default abstract class AbstractODM<Vehicle> {
  private modelName: string;
  private schema: Schema;
  private model: Model<Vehicle>;

  constructor(schema: Schema, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] 
    || model(modelName, this.schema);
  }

  public async create(vehicle: Vehicle): Promise<Vehicle> {
    return this.model.create({ ...vehicle });
  }

  public async getAll(): Promise<Vehicle[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<Vehicle | null> {
    return this.model.findById(id);
  }

  public async update(id: string, body: Vehicle): Promise<Vehicle | null> {
    return this.model
      .findOneAndUpdate({ _id: id }, { ...body } as UpdateQuery<Vehicle>);
  }
}