// const express = require ('express');
import express from 'express'
// import createAttendance from '../controllers/attendanceControllers.js';
const routerAtt = express.Router();
import attendance from '../controllers/attendanceControllers.js';
const {createAttendance,getAllAttendances,getAllAttendanceById,updateAttendance,deleteAttendance}=attendance;



routerAtt.post('/create',createAttendance);
routerAtt.get('/all',getAllAttendances );
routerAtt.get('/:id',getAllAttendanceById);
routerAtt.put('/:id',updateAttendance);
routerAtt.delete('/:id',deleteAttendance);
export default routerAtt;