import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRouter = Router();

MotorcycleRouter.post('/', (req, res) => new MotorcycleController(req, res).createMotorcycle());

export default MotorcycleRouter;