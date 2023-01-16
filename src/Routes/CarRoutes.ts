import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.put(
  '/:id', 
  (req, res, next) => new CarController(req, res, next).updateId(),
);
carRouter.post(
  '/', 
  (req, res, next) => new CarController(req, res, next).create(),
);

carRouter.get(
  '/', 
  (req, res, next) => new CarController(req, res, next).getAllAndId(),
);

carRouter.get(
  '/:id', 
  (req, res, next) => new CarController(req, res, next).getAllAndId(),
);

export default carRouter;