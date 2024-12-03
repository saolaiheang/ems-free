// const express = require('express');
import express from 'express';
// import { createSponsor, updateSponsor } from '../controllers/sponsorconttoller.js';
import createSponsor from '../controllers/sponsorcontroller.js';
const router = express.Router();

router.post('/create', createSponsor);
// router.put('/update/:id', updateSponsor);

export default router;