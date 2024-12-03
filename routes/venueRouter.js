import createVenue from '../controllers/venueController.js';
import express from 'express';
const router= express.Router();
router.post('/create-venue',createVenue);
export default router;
