import { model, Schema } from 'mongoose';

const HackathonSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: false,
    },
    organizer: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    mode: {
      type: { isOnline: Boolean, location: String },
      required: true,
    },
    image: {
      type: String,
      require: false,
    },
    deadline: {
      type: Date,
      require: true,
    },
    // mode: {
    //   type: String, // offline or online
    //   require: true,
    // },
    rewards: {
      type: [{ title: String, prize: String }],
      required: false,
    },
    size: {
      type: Number,
      require: false,
    },
    eligibility: {
      type: Number,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    tags: {
      type: [{ id: String, name: String }],
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    logo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const HackathonModel = model('hackathon', HackathonSchema);
