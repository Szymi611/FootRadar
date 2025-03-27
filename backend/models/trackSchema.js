const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const trackSchema = new Schema({
  imgUrl: String,
  raceName: String,
})

module.exports = mongoose.model('Track', trackSchema, 'Tracks');

