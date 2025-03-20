const express = require('express')

const clubController = require('../controllers/club')

const router = express.Router();

router.get("/players/:teamId", clubController.getClubPlayers);

router.get("/matches/:teamId", clubController.getClubMatches)

router.get("/team/:teamId", clubController.getClub)

router.get("/crest/:teamId", clubController.getClubCrest)

module.exports = router;