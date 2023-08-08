import { CfpModel } from '../../schema/cfps/CfpsSchema.js';

const getAllCfps = async () => {
  try {
    const cfps = await CfpModel.find({});
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const getCfpsById = async (id) => {
  try {
    const cfps = await CfpModel.findById({ _id: { $eq: id } });
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const getCfpsBySlug = async (slug) => {
  try {
    const cfps = await CfpModel.find({ slug: { $eq: slug } });
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const createCfp = async (cfpInfo) => {
  try {
    const cfp = new CfpModel(cfpInfo);
    await cfp.save();
    return cfp;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCfp = async (id, updatedValue) => {
  try {
    const cfps = await CfpModel.findByIdAndUpdate(
      { _id: { $eq: id } },
      { $set: updatedValue },
      { new: true }
    );
    return cfps;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCfp = async (id) => {
  try {
    const cfps = await CfpModel.deleteOne({ _id: { $eq: id } });
    return cfps;
    // return true;
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
