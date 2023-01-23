import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  public async createC() {
    const motorcycle: IMotorcycle = this.req.body;

    const newMotorcycle = await this.service.createMotorcycle(motorcycle);
    return this.res.status(201).json(newMotorcycle);
  }
}