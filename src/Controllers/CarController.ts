import { Request, Response } from 'express';
import { Types } from 'mongoose';
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

  public async getCars() {
    const getCars = await this.service.getCars();
    return this.res.status(200).json(getCars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    if (!Types.ObjectId.isValid(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' }); 
    }
    const car = await this.service.getCarById(id);
    if (car === null) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(car);
  }

  public async updateById() {
    const { body } = this.req;
    const { id } = this.req.params;
    if (!Types.ObjectId.isValid(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' }); 
    }
    const car = await this.service.updateById(id, body);
    if (car === null) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(car);
  }
}