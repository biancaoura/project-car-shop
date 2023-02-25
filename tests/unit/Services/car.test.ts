import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput, allCars, validMongoId } from './Stubs/carStubs';
import CarService from '../../../src/Services/CarService';
import StatusCodes from '../../../src/Utils/StatusCodes';

describe('Car Service', function () {
  afterEach(sinon.restore);

  const service = new CarService();

  const invalidMongoId = '1111222233330000ffffcccc';

  it('1 - Should create a new car', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const result = await service.create(carInput);

    expect(result).to.deep.equal(carOutput);
  });

  it('2 - Should get all cars', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const result = await service.getAll();

    expect(result).to.deep.equal(allCars);
  });

  it('3 - Should get a car by id', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const result = await service.getById(validMongoId);

    expect(result).to.deep.equal(carOutput);
  });

  it('4 - Should throw an error if the car doesn\'t exist', async function () {
    sinon.stub(Model, 'findById').resolves(undefined);

    const result = await service.getById(invalidMongoId).catch((err) => err);

    expect(result.status).to.be.equal(StatusCodes.NOT_FOUND);
    expect(result.message).to.deep.equal('Car not found');
  });

  it('5 - Should throw an error if no car is found when trying to update', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const result = await service.update(invalidMongoId, carInput).catch((err) => err);

    expect(result.status).to.be.equal(StatusCodes.NOT_FOUND);
    expect(result.message).to.deep.equal('Car not found');
  });
});