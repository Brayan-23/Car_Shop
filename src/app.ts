import express from 'express';
import carRouter from './Routes/CarRoutes';
import motorRouter from './Routes/MotorRouter';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorRouter);

export default app;
