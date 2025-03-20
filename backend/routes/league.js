const express = require('express')

const leagueController = require('../controllers/league')

const router = express.Router();

router.get("/standings/:leagueCode", leagueController.getLeagueTable)

router.get("/scorers/:leagueCode", leagueController.getLeagueScorers)

router.get("/:leagueCode/matches", leagueController.getLeagueMatches)

router.get("/teams/:leagueCode", leagueController.getLeagueTeams)

router.get('/matchday/:leagueCode', leagueController.getLeagueMatchday)

module.exports = router;