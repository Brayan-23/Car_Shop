import Sinon = require('sinon');
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarModel from '../../../src/Models/CarModel';
import CarService from '../../../src/Services/Carservice';

const mockCar = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
    id: '1111111111111',
  }];

describe('Testes refentes a Service Car', function () {
  const CarModelo = new CarModel();
  after(function () {
    Sinon.restore();
  });

  it('Testa o sucesso no função create com a chave status', async function () {
    Sinon.stub(Model, 'create').resolves(mockCar[0]);
    Sinon.stub(CarModelo, 'create').resolves(mockCar[0]);
    
    const serviceCar = new CarService();
    const returnMock = await serviceCar.create(mockCar[0]);

    expect(returnMock).to.deep.equal(mockCar[0]);
  });

  /* it('Testa o sucesso no função getAll', async function () {
    Sinon.stub().resolves(mockCar);

    const modelCar = await new Car().getAll();

    expect(modelCar).to.be.equal(mockCar);
  });

  it('Testa o sucesso no função findById', async function () {
    Sinon.stub(Model, 'findById').resolves(mockCar[0]);

    const modelCar = await new Car().findById('11111111111111');

    expect(modelCar).to.be.equal(mockCar[0]);
  });

  it('Testa o sucesso no função findByIdAndUpdate', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(mockCar[0]);

    const modelCar = await new Car().updatedId('11111111111111', mockCar[0]);

    expect(modelCar).to.be.equal(mockCar[0]);
  }); */
});