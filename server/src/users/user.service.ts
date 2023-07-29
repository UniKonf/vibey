import { UserModel } from '../../schema/user/UserSchema';
import { UserType } from './user.interface';
import * as bcrypt from 'bcryptjs';

const register = async (userInfo: UserType) => {
  try {
    const user = await UserModel.findOne({ email: { $eq: userInfo.email } });
    if (user) {
      return { status: 409, message: 'User already exists' };
    }
    if (userInfo.password) {
      const hashedPassword = await bcrypt.hash(userInfo.password as string, 10);
      userInfo.password = hashedPassword;
    }
    const newUser = new UserModel(userInfo);
    await newUser.save();
    return { status: 200, id: newUser._id };
  } catch (error) {
    throw new Error(error as string);
  }
};

const login = async (userInfo: UserType) => {
  try {
    const user = await UserModel.findOne({ email: { $eq: userInfo.email } });
    if (!user) {
      return { status: 404 };
    }
    const validPassword = bcrypt.compare(
      userInfo.password,
      user.password as string
    );
    if (!validPassword) {
      return { status: 401 };
    }

    return { status: 200, id: user._id };
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateUser = async (id: string, userInfo: UserType) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: userInfo },
      { returnOriginal: false }
    );
    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getUser = async (id: string) => {
  try {
    const user = await UserModel.findOne({ _id: { $eq: id } });
    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const UserService = {
  register,
  login,
  updateUser,
  getUser,
};
