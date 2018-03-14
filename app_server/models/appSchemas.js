const mongoose = require('mongoose');

const pallokerhoSchema = new mongoose.Schema({number:String, player:String, nation:String, position:String});
const statsSchema = new mongoose.Schema ({number:String, goals:String});

mongoose.model('pallokerho', pallokerhoSchema);
mongoose.model('stats', statsSchema);