import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleModel from '../../../src/Models/MotorcycleModel';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const request = {
  model: 'PCX',
  year: 2022,
  color: 'Blue',
  status: true,
  buyValue: 12.600,
  category: 'scooter',
  engineCapacity: 160 };

const response = { 
  id: '58ioio',  
  model: 'PCX',
  year: 2022,
  color: 'Blue',
  status: true,
  buyValue: 12.600,
  category: 'scooter',
  engineCapacity: 160 };

describe('Testa se MotorcycleService funciona corretamente', function () {
  it('Testa se e possivel cadastrar uma moto', async function () {
    sinon.stub(MotorcycleModel.prototype, 'create').resolves(response);
    const service = new MotorcycleService();
    expect(await service.createMotorcycle(request)).to.be.deep.equal(response);
  });
});
