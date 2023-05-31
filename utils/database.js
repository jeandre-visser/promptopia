import mongoose from 'mongoose';

let isConnected = false; // tracl if db is connected

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('=> MongoDB is already connected.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('=> MongoDB connection established successfully.');
  } catch (error) {
    console.log('=> MongoDB connection error: ', error);
  }
};
