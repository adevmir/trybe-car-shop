import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRouter = Router();

MotorcycleRouter.post('/', (req, res) => new MotorcycleController(req, res).createMotorcycle());
MotorcycleRouter.get('/', (req, res) => new MotorcycleController(req, res).getMotorcycles());
MotorcycleRouter.get('/:id', (req, res) => new MotorcycleController(req, res).getMotorcycleById());

export default MotorcycleRouter;