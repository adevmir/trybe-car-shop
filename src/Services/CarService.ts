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
    const createCar = new CarModel();
    const newCar = await createCar.create(car.status ? car : newCarStatus);
    return this.createCarDomain(newCar);
  }
}