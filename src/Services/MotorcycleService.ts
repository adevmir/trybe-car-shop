import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
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

  public async getMotorcycles() {
    const model = new MotorcycleModel();
    const Motorcycles = await model.getAll();
    return Motorcycles.map((c) => this.createMotorcycleDomain(c));
  }

  public async getMotorcycleById(id: string) {
    const model = new MotorcycleModel();
    const motorcycle = await model.findById(id);
    if (!motorcycle) {
      return null;
    }
    return this.createMotorcycleDomain(motorcycle);
  }
}