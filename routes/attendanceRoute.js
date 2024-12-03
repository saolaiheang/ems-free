// const express = require ('express');
import express from 'express'
// import attendanceController from '../controllers/attendanceControllers.js';

const routerAtt = express.Router();

router.post('/',attendanceController.createAttendance);
router.get('/', attendanceController.getAllAttendances);
router.get('/id', attendanceController.getAllAttendanceById);
router.put('/',attendanceController.updateAttendance);
router.delete('/',attendanceController.deleteAttendance);
export default routerAtt;