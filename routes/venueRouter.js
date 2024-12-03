import createVenue from '../controllers/venueController.js';
import express from 'express';
const routerVenue= express.Router();
routerVenue.post('/create-venue',createVenue);
export default routerVenue;
