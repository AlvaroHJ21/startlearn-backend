import { Router } from 'express';
import { GameRoutes } from './game/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/records', GameRoutes.routes);
  

    return router;
  }
}
