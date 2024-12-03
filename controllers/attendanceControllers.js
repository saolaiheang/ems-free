const Attendance = require("../models/attendanceModel");

exports.createAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find();
    if (attendances.length === 0) {
      return res.status(404).json({ message: "No Attendances fond" });
    }
    res.json({ attendances });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);

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

exports.updateAttendance = async (req, res) => {
  try {
    const updateData = req.body;
    const updateAttendance = await Attendance.findByIdAndUpdate(
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

exports.deleteAttendance = async (req ,res) => {
    try{
        const deleteAttendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!deleteAttendance){
            return res.status(404).json({error:'Attendance not found'});
        }
        res.status(200).json({message: 'Attendance dateled sucessfully'});
    } catch (err){
        res.status(500).json({error:'Internal server error',details:err.message});
    }
};
