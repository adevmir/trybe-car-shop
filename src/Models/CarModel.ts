import { Schema, model, Model } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class Car {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: 'string', required: true },
      year: { type: 'number', required: true },
      color: { type: 'string', required: true },
      status: { type: 'boolean', required: false },
      buyValue: { type: 'number', required: true },
      doorsQty: { type: 'number', required: true },
      seatsQty: { type: 'number', required: true },
    });
    this.model = model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findOne({ _id: id });
  }
}