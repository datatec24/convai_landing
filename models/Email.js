var mongoose = require('mongoose');

var EmailSchema = new mongoose.Schema({
  email: String,
  id: String,
});

module.exports = mongoose.model('Email', EmailSchema);
