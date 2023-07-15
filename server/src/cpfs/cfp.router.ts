import { validationSchema } from '../validator-schema/validationSchema.js';
import { CfpService } from './cfp.service.js';
import express, { Request, Response } from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const cfpRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

// get all cfps
cfpRouter.get('/', async (_, res: Response) => {
  try {
    const cfps = await CfpService.getAllCfps();
    res.status(200).send({ success: true, cfps });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// get cfp by id
cfpRouter.get(
  '/id/:id',
  checkSchema(validationSchema.idSchema),
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;

      const cfps = await CfpService.getCfpsById(id);
      res.status(200).send({ success: true, cfps });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

// get cfp by slug
cfpRouter.get(
  '/slug/:slug',
  checkSchema(validationSchema.slugSchema),
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const { slug } = req.params;

      const cfps = await CfpService.getCfpsBySlug(slug);
      res.status(200).send({ success: true, cfps });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

// add cfp
cfpRouter.post(
  '/create',
  checkSchema(validationSchema.createSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const data = req.body;
      const cfps = await CfpService.createCfp(data);
      res.status(200).send({ success: true, cfps });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

// update cfp
cfpRouter.post(
  '/update/:id',
  checkSchema(validationSchema.createSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const data = req.body;
      const cfps = await CfpService.updateCfp(id, data);
      res.status(200).send({ success: true, cfps });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

// delete cfp by id
cfpRouter.post(
  '/delete',
  checkSchema(validationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const { id } = req.body;

      const cfps = await CfpService.deleteCfp(id);
      res.status(200).send({ success: true, cfps });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);
