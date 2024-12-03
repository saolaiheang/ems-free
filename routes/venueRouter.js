import venueRouter from '../controllers/venueController.js';
import express from 'express';
const {createVenue,getAllVenues,getVenueDetail,deleteVenue,updateVenue}=venueRouter
const routerVenue= express.Router();
routerVenue.post('/create-venue',createVenue);
routerVenue.get('/getAllVenue',getAllVenues);
routerVenue.get('/venueDetail/:id',getVenueDetail);
routerVenue.delete('/deleteVenue/:id',deleteVenue);
routerVenue.put('/update/:id',updateVenue);
export default routerVenue;
