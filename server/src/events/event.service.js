import { EventModel } from '../../schema/events/EventsSchema.js';

const getAllEvents = async () => {
  try {
    const eventData = await EventModel.find({});

    return eventData;
  } catch (error) {
    throw new Error(error);
  }
};

const getFirstEvent = async () => {
  try {
    const eventData = await EventModel.findOne();

    return eventData;
  } catch (error) {
    throw new Error(error);
  }
};

const getEventsById = async (id) => {
  try {
    const eventById = await EventModel.find({ _id: { $eq: id } });
    return eventById;
  } catch (error) {
    throw new Error(error);
  }
};

const getEventsBySlug = async (slug) => {
  try {
    const eventById = await EventModel.find({ slug: { $eq: slug } });
    if (eventById) {
      return eventById;
    }
    return 'Not found';
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
const updateEvent = async (id, updatedValue) => {
  try {
    const updatedEvent = await EventModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: updatedValue },
      { returnOriginal: false }
    );

    return updatedEvent;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteEvent = async (id) => {
  try {
    const event = await EventModel.deleteOne({ _id: { $eq: id } });
    return event;
    // return true
  } catch (error) {
    throw new Error(error);
  }
};

export const EventService = {
  getAllEvents,
  getFirstEvent,
  getEventsById,
  getEventsBySlug,
  createEvent,
  updateEvent,
  deleteEvent,
};
