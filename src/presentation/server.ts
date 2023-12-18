import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { ErrorHandler } from './middlewares/error-handler';

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port || 3000;
    this.routes = routes;
  }

  async start() {
    // Middlewares
    this.app.use(express.json()); //row json
    this.app.use(express.urlencoded({ extended: true })); //urlencoded is for forms

    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.use(this.routes);

    this.app.use(ErrorHandler.handleError);

    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
