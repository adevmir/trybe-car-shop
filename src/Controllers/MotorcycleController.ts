import { Request, Response } from 'express';
import { Types } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycle = this.req.body;

    const newMotorcycle = await this.service.createMotorcycle(motorcycle);
    return this.res.status(201).json(newMotorcycle);
  }

  public async getMotorcycles() {
    const getMotorcycles = await this.service.getMotorcycles();
    return this.res.status(200).json(getMotorcycles);
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    if (!Types.ObjectId.isValid(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' }); 
    }
    const motorcycle = await this.service.getMotorcycleById(id);
    if (motorcycle === null) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(motorcycle);
  }
}