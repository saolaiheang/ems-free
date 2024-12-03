import venueRouter from '../controllers/venueController.js';
import express from 'express';

const {createVenue,getAllVenues,getVenueDetail,deleteVenue,updateVenue}=venueRouter
const routerVenue= express.Router();
routerVenue.post('/create',createVenue);
routerVenue.get('/all',getAllVenues);
routerVenue.get('/:id',getVenueDetail);
routerVenue.delete('/:id',deleteVenue);
routerVenue.put('/:id',updateVenue);

export default routerVenue;
