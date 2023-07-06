import { EventModel } from '../../schema/events/EventsSchema.js';

const getAllEvents = async () => {
  try {
    const eventData = await EventModel.find({});

    return eventData;
  } catch (error) {
    throw new Error(error);
  }
};

const getEventsById = async (_id) => {
  try {
    const eventById = await EventModel.find({ _id });
    return eventById;
  } catch (error) {
    throw new Error(error);
  }
};

const getEventsBySlug = async (slug) => {
  try {
    const eventById = await EventModel.find({ slug });
    return eventById;
  } catch (error) {
    throw new Error(error);
  }
};

const createEvent = async (eventInfo) => {
  try {
    const createdEvent = new EventModel(eventInfo);

    await createdEvent?.save();

    return createdEvent;
  } catch (error) {
    throw new Error(error);
  }
};
const updateEvent = async (_id, updatedValue) => {
  try {
    const updatedEvent = await EventModel.findOneAndUpdate(
      { _id: _id },
      { $set: updatedValue },
      { returnOriginal: false }
    );

    return updatedEvent;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteEvent = async (_id) => {
  try {
    const event = await EventModel.deleteOne({ _id: _id });
    return event;
  } catch (error) {
    throw new Error(error);
  }
};

export const EventService = {
  getAllEvents,
  getEventsById,
  getEventsBySlug,
  createEvent,
  updateEvent,
  deleteEvent,
};
