import express from 'express' ;
const eventrouter = express.Router();

import createEvent from '../controllers/eventController.js';

eventrouter.post('/create',createEvent);
// eventrouter.get('/getAll',eventController,getAllEvents);
// eventrouter.get('/:id',eventController,getEventByid);
// eventrouter.put('/:id',eventController,updateEvent);
// eventrouter.delete('/:id',eventController,deleteEvent);


export default eventrouter;  



