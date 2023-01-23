import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const newCarStatus = { ...motorcycle, status: false };
    const model = new MotorcycleModel();
    const newMotorcycle = await model.create(motorcycle.status ? motorcycle : newCarStatus);
    return this.createMotorcycleDomain(newMotorcycle);
  }
}