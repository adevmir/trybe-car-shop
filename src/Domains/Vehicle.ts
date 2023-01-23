import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(body: IVehicle) {
    this.id = body.id;
    this.model = body.model;
    this.year = body.year;
    this.color = body.color;
    this.status = body.status;
    this.buyValue = body.buyValue;
  }
}