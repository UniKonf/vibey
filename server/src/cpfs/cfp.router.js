import { cfpValidationSchema } from '../validator-schema/cfpValidation.js';
import { CfpService } from './cfp.service.js';
import express from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const cfpRouter = express.Router();

// get all cfps
cfpRouter.get('/', async (_, res) => {
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
  checkSchema(cfpValidationSchema.idSchema),
  async (req, res) => {
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
  checkSchema(cfpValidationSchema.slugSchema),
  async (req, res) => {
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
  checkSchema(cfpValidationSchema.createCfpSchema),
  async (req, res) => {
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
  // checkSchema(cfpValidationSchema.createCfpSchema),
  async (req, res) => {
    try {
      // const errors = validationResult(req);

      // if (!errors.isEmpty()) {
      //   return res.status(422).json({
      //     errors: errors.array(),
      //   });
      // }

      const { id } = req.params;
      const data = {};
      data.name = req.body.name;
      data.organizer = req.body.organizer;
      data.description = req.body.description;
      data.address = JSON.parse(req.body.address);
      data.date = new Date(req.body.date);
      data.duration = parseInt(req.body.duration);
      data.tags = JSON.parse(req.body.tags);
      data.topics = JSON.parse(req.body.topics);
      data.link = req.body.link;
      data.image = req.body.image;
      data.logo = req.body.logo;
      data.guidelines = req.body.guidelines;
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
  checkSchema(cfpValidationSchema.deleteSchema),
  async (req, res) => {
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
