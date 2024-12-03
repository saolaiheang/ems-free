import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    date: { type: String, require: true },
    description: { type: String, require: true },
    venueid: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
    organizerid: { type: mongoose.Schema.Types.ObjectId, ref: "Organizer" },
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy :{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const eventModels = mongoose.model("Event",eventSchema)
export default eventModels;