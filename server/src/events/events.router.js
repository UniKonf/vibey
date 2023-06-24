import { EventService } from './event.service.js';
import express from 'express';

export const eventRouter = express.Router();

//get all events
eventRouter.get('/', async (_, res) => {
  try {
    const events = await EventService.getAllEvents();
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).send(error);
  }
});

//get event by id
eventRouter.get('/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const events = await EventService.getEventsById(id);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).send(error);
  }
});

//get event by slug
eventRouter.get('/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const events = await EventService.getEventsBySlug(slug);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add event
eventRouter.post('/create', async (req, res) => {
  try {
    const { data } = req.body;
    const events = await EventService.createEvent(data);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).send(error);
  }
});
//update events
eventRouter.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const events = await EventService.updateEvent(id, data);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).send(error);
  }
});
//delete event by id

eventRouter.post('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    const events = await EventService.deleteEvent(id);
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).send(error);
  }
});
