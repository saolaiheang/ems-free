// const Attendance = require("../models/attendanceModel");
import attendanceModel from "../models/attendanceModel.js";

const createAttendance = async (req, res) => {
  try {
    const attendance = new attendanceModel(req.body);
    await attendance.save();
    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getAllAttendances = async (req, res) => {
  try {
    const attendances = await attendanceModel.find();
    if (attendances.length === 0) {
      return res.status(404).json({ message: "No Attendances fond" });
    }
    res.json({ attendances });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getAllAttendanceById = async (req, res) => {
  try {
    const attendance = await attendanceModel.findById(req.params.id);

    if (!attendance) {
      return res.status(404).json({ error: "Attendance not found" });
    }

    res.status(200).json(attendance);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Interbal server error", details: err.message });
  }
};


const updateAttendance = async (req, res) => {
  try {
    const updateData = req.body;
    const updateAttendance = await attendanceModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updateAttendance) {
      return res.status(404).json({ error: "Attendance not found" });
    }

    res
      .status(200)
      .json({
        message: "Attendance updated successfully",
        data: updateAttendance,
      });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
};

const deleteAttendance = async (req ,res) => {
    try{
        const deleteAttendance = await attendanceModel.findByIdAndDelete(req.params.id);
        if (!deleteAttendance){
            return res.status(404).json({error:'Attendance not found'});
        }
        res.status(200).json({message: 'Attendance dateled sucessfully'});
    } catch (err){
        res.status(500).json({error:'Internal server error',details:err.message});
    }
};
export default {createAttendance,getAllAttendances,getAllAttendanceById,updateAttendance,deleteAttendance};
