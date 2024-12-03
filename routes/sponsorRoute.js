// const express = require('express');
import express from 'express';
// import { createSponsor, updateSponsor } from '../controllers/sponsorconttoller.js';
import createSponsor from '../controllers/sponsorcontroller.js';
import getAllSponsor from '../controllers/getallSponsor.js';
import getidSponsor from '../controllers/getSponsorDetail.js';
import updateSponsor from '../controllers/updateSponsor.js';
import deleteSponsor from '../controllers/dalateSponsor.js';

const router = express.Router();

router.post('/create', createSponsor);
router.get('/getall', getAllSponsor);
router.get('/:id', getidSponsor);
router.put('/update/:id', updateSponsor);
router.delete('/:id',deleteSponsor);


export default router;