import ICar from '../../../../src/Interfaces/ICar';
import Car from '../../../../src/Domains/Car';

export const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput: Car = new Car({
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

export const allCars: ICar[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Uno da Escada',
    year: 1960,
    color: 'Red',
    status: true,
    buyValue: 1500,
    doorsQty: 2,
    seatsQty: 2,
  },
];

export const carToUpdate = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const validMongoId = '6348513f34c397abcad040b2';