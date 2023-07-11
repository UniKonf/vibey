import { UserModel } from '../../schema/user/UserSchema.js';
import bcrypt from 'bcryptjs';

const register = async (userInfo) => {
  try {
    const user = await UserModel.findOne({ email: userInfo.email });
    if (user) {
      return { status: 409, message: 'User already exists' };
    }
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    userInfo.password = hashedPassword;
    const newUser = new UserModel(userInfo);
    await newUser.save();
    return { status: 200, id: newUser._id };
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (userInfo) => {
  try {
    const user = await UserModel.findOne({ email: userInfo.email });
    if (!user) {
      return 404;
    }
    const validPassword = await bcrypt.compare(
      userInfo.password,
      user.password
    );
    if (!validPassword) {
      return 401;
    }

    return { status: 200, id: user._id };
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
