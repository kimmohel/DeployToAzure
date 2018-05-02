const mongoose = require('mongoose');

const pallokerhoModel = mongoose.model('pallokerho');
const playerList = function (req, res){
    res
        .status(200)
        .json({"number" : "player"});

};

const addPlayer = function (req, res){
    res.status(201).json({"Add player" : "Work in progress"});
};
module.exports = {
    playerList,
    addPlayer
};
