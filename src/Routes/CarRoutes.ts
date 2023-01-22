import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/', (req, res) => new CarController(req, res).createCar());
carRouter.get('/', (req, res) => new CarController(req, res).getCars());
carRouter.get('/:id', (req, res) => new CarController(req, res).getCarById());

export default carRouter;