const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classroom = new Schema({
  grade_id: String,
  subjects_ids: [String],
  number: Number
})

module.exports = mongoose.model('classroom', classroom)
