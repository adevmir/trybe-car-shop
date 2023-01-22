import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const newCarStatus = { ...car, status: false };
    const model = new CarModel();
    const newCar = await model.create(car.status ? car : newCarStatus);
    return this.createCarDomain(newCar);
  }

  public async getCars() {
    const model = new CarModel();
    const cars = await model.getAll();
    return cars.map((c) => this.createCarDomain(c));
  }

  public async getCarById(id: string) {
    const model = new CarModel();
    const car = await model.findById(id);
    if (!car) {
      return null;
    }
    return this.createCarDomain(car);
  }
}