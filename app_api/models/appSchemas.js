const mongoose = require('mongoose');

const pallokerhoSchema = new mongoose.Schema({number:String, player:String, nation:String, position:String});
const statsSchema = new mongoose.Schema ({number:String, goals:String});

mongoose.model('pallokerho', pallokerhoSchema, 'pallokerho');
mongoose.model('stats', statsSchema, 'maalit');