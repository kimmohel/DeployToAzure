const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const Stats = require('../controllers/Stats'); // ... for the list of goalscorers
const Pallokerho = require('../controllers/Pallokerho'); // ... for the the list of lineups and players

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/Stats', Stats.scorerlist);  // List of goalscorers
router.get('/Pallokerho', Pallokerho.playerlist);  // List of lineups and players

module.exports = router;
