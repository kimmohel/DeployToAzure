const mongoose = require('mongoose');

const statsModel = mongoose.model('stats');
const scorerList = function (req, res){
    res
        .status(200)
        .json({"number" : "goals"});

};

const addScorer = function (req, res){
    res.status(201).json({"Add scorer" : "Work in progress"});
};
module.exports = {
    scorerList,
    addScorer
};
