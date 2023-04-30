import mongoose, { Schema } from "mongoose";

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export const Client = mongoose.model("Client", ClientSchema);
