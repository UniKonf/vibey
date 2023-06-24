import { CfpModel } from '../../schema/cfps/CfpsSchema.js';

const getAllCfps = async () => {
  try {
    const cfp = await CfpModel.find({});

    return cfp;
  } catch (error) {
    throw new Error(error);
  }
};

const getCfpsById = async (_id) => {
  try {
    const cfp = await CfpModel.find({ _id });
    return cfp;
  } catch (error) {
    throw new Error(error);
  }
};

const getCfpsBySlug = async (slug) => {
  try {
    const cfp = await CfpModel.find({ slug });
    return cfp;
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
    const cfp = await CfpModel.findOneAndUpdate(
      { _id: _id },
      { $set: updatedValue },
      { returnOriginal: false }
    );

    return cfp;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCfp = async (_id) => {
  try {
    const cfp = await CfpModel.deleteOne({ _id: _id });
    return cfp;
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
