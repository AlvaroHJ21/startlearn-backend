import { Router } from 'express';
import { GameController } from './controllers';

export class GameRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new GameController();

    router.get('/', controller.findAll);
    router.post('/', controller.store);

    return router;
  }
}
