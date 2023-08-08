import { model, Schema } from 'mongoose';

const EventsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    organizer: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: { isOnline: Boolean, location: String },
      required: true,
    },
    image: {
      type: String,
      require: false,
    },
    date: {
      type: Date,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    tags: {
      type: [
        {
          id: Number,
          name: String,
        },
      ],
      require: true,
    },
    speakers: {
      type: [
        {
          name: String,
          profile: String,
          designation: String,
          socials: [{ name: String, link: String }],
        },
      ],
      required: true,
    },
    requiresTicket: {
      type: Boolean,
      required: true,
    },
    sponsors: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EventModel = model('events', EventsSchema);
