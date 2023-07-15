import { CfpModel } from '../../schema/cfps/CfpsSchema.js';
import { CfpType } from './cfp.interface.js';

const getAllCfps = async () => {
  try {
    const cfps = await CfpModel.find({});
    return cfps;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getCfpsById = async (id: string) => {
  try {
    const cfps = await CfpModel.findById({ _id: { $eq: id } });
    return cfps;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getCfpsBySlug = async (slug: string) => {
  try {
    const cfps = await CfpModel.find({ slug: { $eq: slug } });
    return cfps;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createCfp = async (eventInfo: CfpType) => {
  try {
    const cfp = new CfpModel(eventInfo);
    await cfp.save();
    return cfp;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateCfp = async (id: string, updatedValue: CfpType) => {
  try {
    const cfps = await CfpModel.findByIdAndUpdate(
      { _id: { $eq: id } },
      { $set: updatedValue },
      { new: true }
    );
    return cfps;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteCfp = async (id: string) => {
  try {
    const cfps = await CfpModel.deleteOne({ _id: { $eq: id } });
    return cfps;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const CfpService = {
  getAllCfps,
  getCfpsById,
  getCfpsBySlug,
  createCfp,
  updateCfp,
  deleteCfp,
};
