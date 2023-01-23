import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../src/Models/CarModel';
import CarService from '../../../src/Services/CarService';

const request = {
  model: 'Compass',
  year: 2016,
  color: 'White',
  status: true,
  buyValue: 37.800,
  doorsQty: 4,
  seatsQty: 5 };

const response = { 
  id: '57ioio',  
  model: 'Compass',
  year: 2016,
  color: 'White',
  status: true,
  buyValue: 37.800,
  doorsQty: 4,
  seatsQty: 5 };

describe('Testa se CarService funciona corretamente', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa se e possivel cadastrar um carro', async function () {
    sinon.stub(CarModel.prototype, 'create').resolves(response);
    const service = new CarService();
    expect(await service.createCar(request)).to.be.deep.equal(response);
  });

  it('Testa se e possivel atualizar um carro existente', async function () {
    sinon.stub(CarModel.prototype, 'findById').resolves(response);
    sinon.stub(CarModel.prototype, 'update').resolves();
    const service = new CarService();
    expect(await service.updateById('57ioio', request)).to.be.deep.equal(response);
  });
});
