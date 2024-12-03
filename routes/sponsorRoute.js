// const express = require('express');
import express from 'express';
// import { createSponsor, updateSponsor } from '../controllers/sponsorconttoller.js';
import createSponsor from '../controllers/sponsorcontroller.js';
import getAllSponsor from '../controllers/getallSponsor.js';
import getidSponsor from '../controllers/getSponsorDetail.js';
import updateSponsor from '../controllers/updateSponsor.js';
import deleteSponsor from '../controllers/dalateSponsor.js';

const sponsorRouter = express.Router();

sponsorRouter.post('/create', createSponsor);
sponsorRouter.get('/all', getAllSponsor);
sponsorRouter.get('/:id', getidSponsor);
sponsorRouter.put('/:id', updateSponsor);
sponsorRouter.delete('/:id',deleteSponsor);


export default sponsorRouter;