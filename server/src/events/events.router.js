import { eventValidationSchema } from '../validator-schema/eventValidation.js';
import { EventService } from './event.service.js';
import express from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const eventRouter = express.Router();

//get all events
eventRouter.get('/', async (req, res) => {
  try {
    const events = await EventService.getAllEvents();
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
//get first event value
eventRouter.get('/first', async (req, res) => {
  try {
    const events = await EventService.getFirstEvent();
    res.status(200).send({ success: true, events: events });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
//get event by id
eventRouter.get(
  '/id/:id',
  checkSchema(eventValidationSchema.idSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      if (!id) {
        res
          .status(422)
          .send({ success: false, message: 'Invalid id parameter' });
      }

      const events = await EventService.getEventsById(id);
      res.status(200).send({ success: true, events: events });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//get event by slug
eventRouter.get(
  '/slug/:slug',
  checkSchema(eventValidationSchema.slugSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { slug } = req.params;

      const events = await EventService.getEventsBySlug(slug);
      res.status(200).send({ success: true, events: events });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//add event
eventRouter.post(
  '/create',
  checkSchema(eventValidationSchema.createEventSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      let data = {};
      data.name = req.body.name;
      data.organizer = req.body.organizer;
      data.description = req.body.description;
      data.address = JSON.parse(req.body.address);
      data.date = new Date(req.body.date1);
      data.duration = parseInt(req.body.duration);
      data.tags = JSON.parse(req.body.tags);
      data.link = req.body.link;
      data.image = req.body.image;
      data.logo = req.body.logo;
      data.speakers = JSON.parse(req.body.speakers);
      data.requiresTicket = req.body.requiresTicket;
      data.sponsors = JSON.parse(req.body.sponsors);
      const events = await EventService.createEvent(data);
      res.status(200).send({ success: true, events: events });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);
//update events
eventRouter.post(
  '/update/:id',
  checkSchema(eventValidationSchema.createEventSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      let data = {};
      data.name = req.body.name;
      data.organizer = req.body.organizer;
      data.description = req.body.description;
      data.address = JSON.parse(req.body.address);
      data.date = new Date(req.body.date1);
      data.duration = parseInt(req.body.duration);
      data.tags = JSON.parse(req.body.tags);
      data.link = req.body.link;
      data.image = req.body.image;
      data.logo = req.body.logo;
      data.speakers = JSON.parse(req.body.speakers);
      data.requiresTicket = req.body.requiresTicket;
      data.sponsors = JSON.parse(req.body.sponsors);

      const events = await EventService.updateEvent(id, data);
      res.status(200).send({ success: true, events: events });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);
//delete event by id

eventRouter.post(
  '/delete',
  checkSchema(eventValidationSchema.deleteSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;

      const events = await EventService.deleteEvent(id);
      res.status(200).send({ success: true, events: events });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);
