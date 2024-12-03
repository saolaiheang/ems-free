// const mongoose = require("mongoose");
import mongoose from "mongoose";
 
const attendanceSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true},
    email: {type:String,},
    eventID: {type:String},
    createdBy: { type:mongoose.Types.ObjectId, ref: 'User'},
    updatedBy: { type:mongoose.Types.ObjectId, ref: 'User'},
},
{
    timestamps:true,
});
const attSchema= mongoose.model("Attendance", attendanceSchema);
export default attSchema;

