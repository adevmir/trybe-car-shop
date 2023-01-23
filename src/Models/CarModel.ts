import { Schema, model, Model, models, UpdateQuery } from 'mongoose';
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
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  // public async uptadeById(id: string, req: Request): Promise<ICar | null> {
  //   const { year, color, status, buyValue, doorsQty, seatsQty } = req.body;
  //   const newCar = await this.model.findOne({ _id: id });
  //   if (newCar) {
  //     await newCar.overwrite({
  //       model: req.body.model,
  //       year,
  //       color,
  //       status,
  //       buyValue,
  //       doorsQty,
  //       seatsQty });
  //   }

  public async update(id: string, body: ICar): Promise<ICar | null> {
    return this.model
      .findOneAndUpdate({ _id: id }, { ...body } as UpdateQuery<ICar>);
  }
}