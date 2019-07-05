const mongoose = require('mongoose')
const Schema = mongoose.Schema

const student = new Schema({
  grade_id: String,
  classroom_id: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  email: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('student', student)
