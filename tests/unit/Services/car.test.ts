import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput, allCars } from '../carStubs';
import CarService from '../../../src/Services/CarService';
import StatusCodes from '../../../src/Utils/StatusCodes';

describe('Car Service', function () {
  afterEach(sinon.restore);

  it('1 - Should create a new car', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.deep.equal(carOutput);
  });

  it('2 - Should get all cars', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.deep.equal(allCars);
  });

  it('3 - Should get a car by id', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById('6348513f34c397abcad040b2');

    expect(result).to.deep.equal(carOutput);
  });

  it('4 - Should throw an error if the car doesn\'t exist', async function () {
    sinon.stub(Model, 'findById').resolves(undefined);

    const invalidMongoId = '1111222233330000ffffcccc';

    const service = new CarService();
    const result = await service.getById(invalidMongoId).catch((err) => err);

    expect(result.status).to.be.equal(StatusCodes.NOT_FOUND);
    expect(result.message).to.deep.equal('Car not found');
  });
});