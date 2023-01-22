import { Router } from 'express';
import carRouter from './CarRoutes';

const routes = Router();

routes.use('/cars', carRouter);

export default routes;