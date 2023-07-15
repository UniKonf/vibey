import { HackathonModel } from '../../schema/hackathon/hackathonSchema';
import { HackathonType } from './hackathon.interface';

const getAllHackathons = async () => {
  try {
    const hackathon = await HackathonModel.find({});
    return hackathon;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getHackathonsById = async (id: string) => {
  try {
    const hackathon = await HackathonModel.find({ _id: { $eq: id } });
    return hackathon;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getHackathonsBySlug = async (slug: string) => {
  try {
    const hackathon = await HackathonModel.find({ slug: { $eq: slug } });
    return hackathon;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createHackathon = async (hackathonInfo: HackathonType) => {
  try {
    const hackathon = new HackathonModel(hackathonInfo);
    await hackathon.save();
    return hackathon;
  } catch (error) {
    throw new Error(error as string);
  }
};
const updateHackathon = async (id: string, updatedValue: HackathonType) => {
  try {
    const hackathon = await HackathonModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: updatedValue },
      { returnOriginal: false }
    );

    return hackathon;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteHackathon = async (id: string) => {
  try {
    const hackathon = await HackathonModel.deleteOne({ _id: { $eq: id } });
    return hackathon;
  } catch (error) {
    throw new Error(error as string);
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
