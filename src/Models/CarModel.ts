import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class Car extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: 'string', required: true },
      year: { type: 'number', required: true },
      color: { type: 'string', required: true },
      status: { type: 'boolean', required: false },
      buyValue: { type: 'number', required: true },
      doorsQty: { type: 'number', required: true },
      seatsQty: { type: 'number', required: true },
    });
    super(schema, 'car');
  }
}