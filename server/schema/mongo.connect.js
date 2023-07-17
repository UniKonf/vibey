import mongoose, { connect } from 'mongoose';

//surprass deprication warning
mongoose.set('strictQuery', false);

export const mongoConnect = async () => {
  const connectionString = process.env.DB;
  try {
    // eslint-disable-next-line no-console
    await connect(connectionString);
  } catch (error) {
    throw new Error(error);
  }
};
