import express from 'express' ;
import eventControllers from '../controllers/eventController.js';
const {createEvent,getAllEvents,getEventByid,updateEvent,deleteEvent} = eventControllers;
const eventrouter = express.Router();

// import eventController from '../controllers/eventController.js';


eventrouter.post('/create',createEvent);
eventrouter.get('/getAll',getAllEvents);
eventrouter.get('/:id',getEventByid);
eventrouter.put('/:id',updateEvent);
eventrouter.delete('/:id',deleteEvent);

export default eventrouter;  



