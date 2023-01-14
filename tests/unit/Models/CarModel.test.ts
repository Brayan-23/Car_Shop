import Sinon = require('sinon');
import { expect } from 'chai';
import { Model } from 'mongoose';
import Car from '../../../src/Models/CarModel';

const mockCar = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
    id: '11111111111111',
  }];

describe('Testes refentes a Model Car', function () {
  after(function () {
    Sinon.restore();
  });

  it('Testa o sucesso no função create', async function () {
    Sinon.stub(Model, 'create').resolves(mockCar[0]);

    const modelCar = await new Car().create(mockCar[0]);

    expect(modelCar).to.be.equal(mockCar[0]);
  });

  it('Testa o sucesso no função getAll', async function () {
    Sinon.stub(Model, 'find').resolves(mockCar);

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
  });
});