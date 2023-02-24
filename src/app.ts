import express from 'express';
import CarRoute from './Routes/Car';
import ErrorMiddleware from './Middlewares/ErrorMiddleware';

const app = express();

app.use(express.json());

app.use('/cars', CarRoute);

app.use(ErrorMiddleware.error);

export default app;
