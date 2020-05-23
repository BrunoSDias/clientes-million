const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/clienteMillion';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose; 