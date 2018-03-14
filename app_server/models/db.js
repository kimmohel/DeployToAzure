const mongoose = require('mongoose');

const dbURI = 'mongodb://Kimmoh:asdasd123@ds012178.mlab.com:12178/helminen';

mongoose.connect(dbURI);

require('./appSchemas');

