import express from 'express' ;
import eventControllers from '../controllers/eventController.js';
const {createEvent,getAllEvents,getEventByid,updateEvent,deleteEvent} = eventControllers;
const eventrouter = express.Router();



eventrouter.post('/create',createEvent);
eventrouter.get('/all',getAllEvents);
eventrouter.get('/:id',getEventByid);
eventrouter.put('/:id',updateEvent);
eventrouter.delete('/:id',deleteEvent);

export default eventrouter;  



