import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { allBikes, bikeInput, bikeOutput, validMongoId } from './Stubs/motorcycleStubs';
import StatusCodes from '../../../src/Utils/StatusCodes';

describe('Motorcycle Service', function () {
  afterEach(sinon.restore);

  const service = new MotorcycleService();

  it('1 - Should create a new motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(bikeOutput);

    const result = await service.create(bikeInput);

    expect(result).to.deep.equal(bikeOutput);
  });

  it('2 - Should get all motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(allBikes);

    const result = await service.getAll();

    expect(result).to.deep.equal(allBikes);
  });

  it('3 - Should get a motorcycle by id', async function () {
    sinon.stub(Model, 'findById').resolves(bikeOutput);

    const result = await service.getById(validMongoId);

    expect(result).to.deep.equal(bikeOutput);
  });

  it(
    '4 - Should throw an error if no motorcycle is found when trying to update',
    async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves();

      const invalidMongoId = '1111222233330000ffffcccc';
      const result = await service.update(invalidMongoId, bikeInput).catch((err) => err);

      expect(result.status).to.be.equal(StatusCodes.NOT_FOUND);
      expect(result.message).to.deep.equal('Motorcycle not found');
    },
  );
});