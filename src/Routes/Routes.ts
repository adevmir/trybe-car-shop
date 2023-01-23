import { Router } from 'express';
import carRouter from './CarRoutes';
import motorcycleRouter from './MotorcycleRoutes';

const routes = Router();

routes.use('/cars', carRouter);
routes.use('motorcycles', motorcycleRouter);

export default routes;