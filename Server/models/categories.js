var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new mongoose.Schema({
    name: String
  });

module.exports = mongoose.model('Categories', categorySchema, 'Categories');