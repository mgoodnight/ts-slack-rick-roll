import { Request, Response } from 'express';

/**
 * Express controller for GET /healthcheck
 *
 * GET /healthcheck
 *
 * @param {Request} req
 * @param {Response} res
 */
export default async (req: Request, res: Response) => {
  res.send();
};
