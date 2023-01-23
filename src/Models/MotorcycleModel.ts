import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class Motorcycle extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: 'string', required: true },
      year: { type: 'number', required: true },
      color: { type: 'string', required: true },
      status: { type: 'boolean', required: false },
      buyValue: { type: 'number', required: true },
      category: { type: 'string', required: true },
      engineCapacity: { type: 'number', required: true },
    });
    super(schema, 'motorcycle');
  }
}