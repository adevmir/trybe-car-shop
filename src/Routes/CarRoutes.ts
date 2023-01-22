import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/', (req, res) => new CarController(req, res).createCar());

export default carRouter;