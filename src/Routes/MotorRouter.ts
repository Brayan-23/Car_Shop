import { Router } from 'express';
import MotorController from '../Controllers/MotorcycleController';

const motorRouter = Router();

motorRouter.post(
  '/', 
  (req, res, next) => new MotorController(req, res, next).create(),
);
motorRouter.put(
  '/:id', 
  (req, res, next) => new MotorController(req, res, next).updateId(),
);

motorRouter.get(
  '/', 
  (req, res, next) => new MotorController(req, res, next).getAllAndId(),
);

motorRouter.get(
  '/:id', 
  (req, res, next) => new MotorController(req, res, next).getAllAndId(),
);

export default motorRouter;