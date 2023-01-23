import { Schema, model, Model, models } from 'mongoose';
import IMotorcycle from "../Interfaces/IMotorcycle";

export default class Motorcycle {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: 'string', required: true },
      year: { type: 'number', required: true },
      color: { type: 'string', required: true },
      status: { type: 'boolean', required: false },
      buyValue: { type: 'number', required: true },
      category: { type: 'string', required: true },
      engineCapacity: { type: 'number', required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }
}