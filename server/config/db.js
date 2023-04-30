import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`MongoDB Connected`.cyan.underline.bold);
    })
    .catch((err) => {
      console.log(`Error: ${err}`.red.underline.bold);
    });
};
