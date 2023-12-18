import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export class ErrorHandler {
  static handleError = (error: unknown, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(400).json({ ok: false, errors: [error.name] });
    }

    if (error) {
      console.log(error);
      return res.status(500).json({ ok: false, errors: ['Internal server error'] });
    }

    next();
  };
}
