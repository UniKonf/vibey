import { HackathonModel } from '../../schema/hackathon/hackathonSchema.js';

const getAllHackathons = async () => {
  try {
    const hackathon = await HackathonModel.find({});
    return hackathon;
  } catch (error) {
    throw new Error(error);
  }
};

const getHackathonsById = async (id) => {
  try {
    const hackathon = await HackathonModel.find({ _id: { $eq: id } });
    return hackathon;
  } catch (error) {
    throw new Error(error);
  }
};

const getHackathonsBySlug = async (slug) => {
  try {
    const hackathon = await HackathonModel.find({ slug: { $eq: slug } });
    return hackathon;
  } catch (error) {
    throw new Error(error);
  }
};

const createHackathon = async (hackathonInfo) => {
  try {
    const hackathon = new HackathonModel(hackathonInfo);
    await hackathon.save();
    return hackathon;
  } catch (error) {
    throw new Error(error);
  }
};
const updateHackathon = async (id, updatedValue) => {
  try {
    const hackathon = await HackathonModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: updatedValue },
      { returnOriginal: false }
    );

    return hackathon;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteHackathon = async (id) => {
  try {
    const hackathon = await HackathonModel.deleteOne({ _id: { $eq: id } });
    return hackathon;
  } catch (error) {
    throw new Error(error);
  }
};

export const HackathonService = {
  getAllHackathons,
  getHackathonsById,
  getHackathonsBySlug,
  createHackathon,
  updateHackathon,
  deleteHackathon,
};
