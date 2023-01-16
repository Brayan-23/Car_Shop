import Sinon = require('sinon');
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorService from '../../../src/Services/MotorcycleService';

const mockMotor = [
  {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
    id: '11111111111',
  },
];

const mockSemStatus = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  id: '1111111111111',
};

describe('Testes refentes a Service Motor', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Testa o sucesso no função create com a chave status', async function () {
    Sinon.stub(Model, 'create').resolves(mockMotor[0]); 
    
    const serviceMotor = new MotorService();
    const returnMock = await serviceMotor.create(mockMotor[0]);

    expect(returnMock).to.deep.equal(mockMotor[0]);
  });

  it('Testa o sucesso no função create sem a chave status', async function () {
    Sinon.stub(Model, 'create').resolves(mockMotor[0]);
    
    const serviceMotor = new MotorService();
    const returnMock = await serviceMotor.create(mockSemStatus);

    expect(returnMock).to.deep.equal(mockMotor[0]);
  });

  it('Testa o sucesso no função getAll', async function () {
    Sinon.stub(Model, 'find').resolves(mockMotor);

    const serviceMotor = new MotorService();
    const returnMOck = await serviceMotor.getAllAndId(undefined); 

    expect(returnMOck).to.deep.equal(mockMotor);
  });

  it('Testa o sucesso da função findById', async function () {
    Sinon.stub(Model, 'findById').resolves(mockMotor[0]);

    const serviceMotor = new MotorService();
    const returnMock = await serviceMotor.getAllAndId('56664656744654');
    
    expect(returnMock).to.deep.equal(mockMotor[0]);
  });

  it('Testa o retorna de um erro ao procurar um id inválido', async function () {
    Sinon.stub(Model, 'findById').throws(new Error());

    const serviceMotor = new MotorService();
    const returnMock = await serviceMotor.getAllAndId('56664656744654');
    
    expect(returnMock).to.be.equal('Deu Erro');
  });
  it('Testa o retorna null na função CreateCarDomain', async function () {
    Sinon.stub(Model, 'create').resolves(undefined);

    const serviceMotor = new MotorService();
    const returnMock = await serviceMotor.create(mockSemStatus);
    
    expect(returnMock).to.be.equal(null);
  });

  it('Testa o retorna da função updateId', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(mockMotor[0]);
    Sinon.stub(Model, 'findById').resolves(mockMotor[0]);

    const serviceMotor = new MotorService();
    const returnMock = await serviceMotor.updateId('11111111', mockSemStatus);
    
    expect(returnMock).to.deep.equal(mockMotor[0]);
  });
  it('Testa o retorna de um erro ao tentar atualizar um carro com id inválido', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').throws(new Error());

    const serviceCar = new MotorService();
    const returnMock = await serviceCar.updateId('56664656744654', mockSemStatus);
    
    expect(returnMock).to.be.equal('Deu Erro');
  });
});