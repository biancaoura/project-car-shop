import express from 'express';
import CarRoute from './Routes/Car';
import MotorcycleRoute from './Routes/Motorcycle';
import ErrorMiddleware from './Middlewares/ErrorMiddleware';

const app = express();

app.use(express.json());

app.use('/cars', CarRoute);

app.use('/motorcycles', MotorcycleRoute);

app.use(ErrorMiddleware.error);

export default app;
