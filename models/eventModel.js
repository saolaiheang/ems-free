import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, max: [200],min:[8], require: true },
    date: { type: String, require: true },
    description: { type: String, require: true },
    venueid: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
    organizerid: { type: mongoose.Schema.Types.ObjectId, ref: "Organizer" },
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy :{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { TimeRanges: true }
);

const eventModels = mongoose.model("Event",eventSchema)
export default eventModels;