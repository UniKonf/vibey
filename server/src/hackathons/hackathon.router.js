import { HackathonService } from './hackathon.service.js';
import express from 'express';

export const hackathonRouter = express.Router();

//get all hackathon

hackathonRouter.get('/', async (_, res) => {
  try {
    const hackathon = await HackathonService.getAllHackathons();
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//get hackathon by id

hackathonRouter.get('/id/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(422).send({ success: false, message: 'Invalid id parameter' });
    }

    const hackathon = await HackathonService.getHackathonsById(id);
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//get hackathon by slug

hackathonRouter.get('/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res
        .status(422)
        .send({ success: false, message: 'Invalid slug parameter' });
    }

    const hackathon = await HackathonService.getHackathonsBySlug(slug);
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//create hackathon
hackathonRouter.post('/create', async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      res.status(422).send({ success: false, message: 'Invalid data' });
    }
    const hackathon = await HackathonService.createHackathon(data);
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//update hackathon
hackathonRouter.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    if (!id) {
      res.status(422).send({ success: false, message: 'Invalid id parameter' });
    }
    if (!data) {
      res.status(422).send({ success: false, message: 'Invalid data' });
    }
    const hackathon = await HackathonService.updateHackathon(id, data);
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//delete hackathon by id

hackathonRouter.post('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    const hackathon = await HackathonService.deleteHackathon(id);
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
