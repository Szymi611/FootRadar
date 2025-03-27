const express = require('express')

const f1Controller = require('../controllers/f1')

const router = express.Router();

router.get('/f1/drivers', f1Controller.getDriver);

router.get('/f1/meetings', f1Controller.getLatestMeeting);

router.get('/f1/sessions/:year', f1Controller.getAllSessions) //Specjalnego roku

router.get('/f1/incidents', f1Controller.getAllIncidents)

module.exports = router;