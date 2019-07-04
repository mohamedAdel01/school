const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacher = new Schema({
  grades_ids: [String],
  classrooms_ids: [String],
  subject_id: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  email: String,
  image: String,
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('teacher', teacher)
