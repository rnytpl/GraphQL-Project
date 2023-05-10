import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
  },

  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

export const Project = mongoose.model("project", ProjectSchema);
