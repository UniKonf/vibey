import { model, Schema } from 'mongoose';

const RewardSchema = new Schema({
  //ex - First runners up.
  title: {
    type: String,
    require: true,
  },
  //ex - $3000
  prize: {
    type: Number,
    require: true,
  },
});

const HackathonSchema = new Schema(
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
    deadline: {
      type: Date,
      require: true,
    },
    mode: {
      type: String, // offline or online
      require: true,
    },
    rewards: {
      type: [RewardSchema],
      required: false,
    },
    size: {
      type: Number,
      require: false,
    },
    elligibility: {
      type: String,
      require: true,
    },
    // date: {
    //   type: Date,
    //   require: true,
    // },
    duration: {
      type: Number,
      require: true,
    },
    tags: {
      type: [String],
      require: true,
    },
    link: {
      type: String,
      require: true,
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
