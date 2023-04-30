import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: true,
  },
});

export const Project = mongoose.model("project", ProjectSchema);
