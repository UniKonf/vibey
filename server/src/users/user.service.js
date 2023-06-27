import { UserModel } from '../../schema/user/UserSchema.js';

const register = async (userInfo) => {
  try {
    //   const { email, ...data } = userInfo

    const newUser = new UserModel(userInfo);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

// eslint-disable-next-line unused-imports/no-unused-vars
const login = async () => {
  try {
    //  const { email, password } = userInfo;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (_id, userInfo) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: _id },
      { $set: userInfo },
      { returnOriginal: false }
    );
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getUser = async (_id) => {
  try {
    const user = await UserModel.findOne({ _id });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const UserService = {
  register,
  login,
  updateUser,
  getUser,
};
