import { NextFunction, Request, Response } from 'express';
import prisma from '../../lib/prisma';

export class GameController {
  async findAll(_: Request, res: Response, next: NextFunction) {
    try {
      const records = await prisma.records.findMany({
        orderBy: {
          score: 'desc',
        },
      });
      res.json({
        ok: true,
        data: records,
      });
    } catch (error) {
      next(error);
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, score } = req.body;
      const record = await prisma.records.create({
        data: {
          name,
          score,
        },
      });
      res.json({
        ok: true,
        data: record,
        message: 'Record created successfully',
      });
    } catch (error) {
      next(error);
    }
  }
}
