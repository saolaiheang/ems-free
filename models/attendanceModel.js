const mongoose = require("mongoose");
 
const attendanceSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    eventID: {type:Schema.Types.ObjectId, ref: 'Event'},
    createdBy: { type:Schema.Types.ObjectId, ref: 'User'},
    updatedBy: { type:Schema.Types.ObjectId, ref: 'User'},
},
{
    timestamps:true,
});



module.exports = mongoose.model("Attendance", attendanceSchema);

