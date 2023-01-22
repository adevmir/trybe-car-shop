import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async createCar() {
    const car: ICar = this.req.body;

    const newCar = await this.service.createCar(car);
    return this.res.status(201).json(newCar);
  }
}