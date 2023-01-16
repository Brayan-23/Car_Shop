import Sinon = require('sinon');
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Carservice';

const mockCar = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
    id: '1111111111111',
  },
];

const mockSemStatus = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
  id: '1111111111111',
};

describe('Testes refentes a Service Car', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Testa o sucesso no função create com a chave status', async function () {
    Sinon.stub(Model, 'create').resolves(mockCar[0]); 
    
    const serviceCar = new CarService();
    const returnMock = await serviceCar.create(mockCar[0]);

    expect(returnMock).to.deep.equal(mockCar[0]);
  });

  it('Testa o sucesso no função create sem a chave status', async function () {
    Sinon.stub(Model, 'create').resolves(mockCar[0]);
    
    const serviceCar = new CarService();
    const returnMock = await serviceCar.create(mockSemStatus);

    expect(returnMock).to.deep.equal(mockCar[0]);
  });

  it('Testa o sucesso no função getAll', async function () {
    Sinon.stub(Model, 'find').resolves(mockCar);

    const serviceCar = new CarService();
    const returnMOck = await serviceCar.getAllAndId(undefined); 

    expect(returnMOck).to.deep.equal(mockCar);
  });

  it('Testa o sucesso da função findById', async function () {
    Sinon.stub(Model, 'findById').resolves(mockCar[0]);

    const serviceCar = new CarService();
    const returnMock = await serviceCar.getAllAndId('56664656744654');
    
    expect(returnMock).to.deep.equal(mockCar[0]);
  });

  it('Testa o retorna de um erro ao procurar um id inválido', async function () {
    Sinon.stub(Model, 'findById').throws(new Error());

    const serviceCar = new CarService();
    const returnMock = await serviceCar.getAllAndId('56664656744654');
    
    expect(returnMock).to.be.equal('Deu Erro');
  });
  it('Testa o retorna null na função CreateCarDomain', async function () {
    Sinon.stub(Model, 'create').resolves(undefined);

    const serviceCar = new CarService();
    const returnMock = await serviceCar.create(mockSemStatus);
    
    expect(returnMock).to.be.equal(null);
  });

  it('Testa o retorna da função updateId', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(mockCar[0]);
    Sinon.stub(Model, 'findById').resolves(mockCar[0]);

    const serviceCar = new CarService();
    const returnMock = await serviceCar.updateId('11111111', mockSemStatus);
    
    expect(returnMock).to.deep.equal(mockCar[0]);
  });
  it('Testa o retorna de um erro ao tentar atualizar um carro com id inválido', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').throws(new Error());

    const serviceCar = new CarService();
    const returnMock = await serviceCar.updateId('56664656744654', mockSemStatus);
    
    expect(returnMock).to.be.equal('Deu Erro');
  });
});