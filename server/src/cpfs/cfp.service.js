import { CfpModel } from '../../schema/cfps/CfpsSchema.js';

const getAllCfps = async () => {
  try {
    const cfps = await CfpModel.find({});
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const getCfpsById = async (_id) => {
  try {
    const cfps = await CfpModel.findById(_id);
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const getCfpsBySlug = async (slug) => {
  try {
    const cfps = await CfpModel.find({ slug });
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const createCfp = async (eventInfo) => {
  try {
    const cfp = new CfpModel(eventInfo);
    await cfp.save();
    return cfp;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCfp = async (_id, updatedValue) => {
  try {
    const cfps = await CfpModel.findByIdAndUpdate(
      _id,
      { $set: updatedValue },
      { new: true }
    );
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCfp = async (_id) => {
  try {
    const cfps = await CfpModel.deleteOne({ _id });
    return cfps;
  } catch (error) {
    throw new Error(error);
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
