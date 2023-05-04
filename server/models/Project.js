import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
});

export const Project = mongoose.model("project", ProjectSchema);
