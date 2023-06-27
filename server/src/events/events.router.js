import { EventService } from './event.service.js';
import express from 'express';

export const eventRouter = express.Router();

//get all events
eventRouter.get('/', async (_, res) => {
  try {
    const events = await EventService.getAllEvents();
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//get event by id
eventRouter.get('/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(422).send({ success: false, message: 'Invalid id parameter' });
    }

    const events = await EventService.getEventsById(id);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//get event by slug
eventRouter.get('/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res
        .status(422)
        .send({ success: false, message: 'Invalid slug parameter' });
    }
    const events = await EventService.getEventsBySlug(slug);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//add event
eventRouter.post('/create', async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      res.status(422).send({ success: false, message: 'Invalid data' });
    }
    const events = await EventService.createEvent(data);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
//update events
eventRouter.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    if (!id) {
      res.status(422).send({ success: false, message: 'Invalid id parameter' });
    }
    if (!data) {
      res.status(422).send({ success: false, message: 'Invalid data' });
    }
    const events = await EventService.updateEvent(id, data);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
//delete event by id

eventRouter.post('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      res.status(422).send({ success: false, message: 'Invalid id' });
    }
    const events = await EventService.deleteEvent(id);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
