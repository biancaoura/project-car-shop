import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { bikeInput, bikeOutput } from './Stubs/motorcycleStubs';

describe('Motorcycle Service', function () {
  afterEach(sinon.restore);

  const service = new MotorcycleService();

  it('1 - Should create a new motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(bikeOutput);

    const result = await service.create(bikeInput);

    expect(result).to.deep.equal(bikeOutput);
  });
});