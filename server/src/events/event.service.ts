import { EventModel } from '../../schema/events/EventsSchema';
import { EventType } from './event.interface';

const getAllEvents = async () => {
  try {
    const eventData = await EventModel.find({});

    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getFirstEvent = async () => {
  try {
    const eventData = await EventModel.findOne();

    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getEventsById = async (id: string) => {
  try {
    const eventById = await EventModel.find({ _id: { $eq: id } });
    return eventById;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getEventsBySlug = async (slug: string) => {
  try {
    const eventById = await EventModel.find({ slug: { $eq: slug } });
    if (eventById) {
      return eventById;
    }
    return 'Not found';
  } catch (error) {
    throw new Error(error as string);
  }
};

const createEvent = async (eventInfo: EventType) => {
  try {
    const createdEvent = new EventModel(eventInfo);

    await createdEvent?.save();

    return createdEvent;
  } catch (error) {
    throw new Error(error as string);
  }
};
const updateEvent = async (id: string, updatedValue: EventType) => {
  try {
    const updatedEvent = await EventModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: updatedValue },
      { returnOriginal: false }
    );

    return updatedEvent;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteEvent = async (id: string) => {
  try {
    const event = await EventModel.deleteOne({ _id: { $eq: id } });
    return event;
  } catch (error) {
    throw new Error(error as string);
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
