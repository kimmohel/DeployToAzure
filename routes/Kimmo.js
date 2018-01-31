var express = require('express');
var router = express.Router();

/* GET GitHub info. */
router.get('/', function(req, res, next) {
    res.send('My deployment github repository can be found at https://github.com/kimmohel/DeployToAzure');
});

module.exports = router;