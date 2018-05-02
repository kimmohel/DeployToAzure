const express = require('express');
const router = express.router();

const ctrlApiPallokerho = require('../controllers/ctrlApiPallokerho');
const ctrlApiStats = require('../controllers/ctrlApiStats');

router
    .route('/pallokerho')
    .get(ctrlApiPallokerho.playerList)
    .post(ctrlApiPallokerho.addPlayer);

router
    .route('/stats')
    .get(ctrlApiStats.scorerList)
    .post(ctrlApiStats.getScorer);

module.exports = router;
