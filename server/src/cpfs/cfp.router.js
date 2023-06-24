import { CfpService } from './cfp.service.js';
import express from 'express';

export const cfpRouter = express.Router();

//get all cfps

cfpRouter.get('/', async (_, res) => {
  try {
    const cfps = await CfpService.getAllCfps();
    res.status(200).send({ success: true, cfps: cfps });
  } catch (error) {
    res.status(500).send(error);
  }
});

//get cfp by id

cfpRouter.get('/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cfps = await CfpService.getCfpsById(id);
    res.status(200).send({ success: true, cfps: cfps });
  } catch (error) {
    res.status(500).send(error);
  }
});

//get cfp by slug

cfpRouter.get('/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const cfps = await CfpService.getCfpsBySlug(slug);
    res.status(200).send({ success: true, cfps: cfps });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add cfp
cfpRouter.post('/create', async (req, res) => {
  try {
    const { data } = req.body;
    const cfps = await CfpService.createCfp(data);
    res.status(200).send({ success: true, cfps: cfps });
  } catch (error) {
    res.status(500).send(error);
  }
});
//update cfp
cfpRouter.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const cfps = await CfpService.updateCfp(id, data);
    res.status(200).send({ success: true, cfps: cfps });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete cfp by id

cfpRouter.post('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    const cfps = await CfpService.deleteCfp(id);
    res.status(200).send({ success: true, cfps: cfps });
  } catch (error) {
    res.status(500).send(error);
  }
});
