import createVenue from "../controllers/venueController";
// import { Router } from "express";
import express from 'express';
const router= express.Router();
router.post('/create-venue',createVenue);
module.exports=router;
