const mongoose = require('mongoose')
const Schema = mongoose.Schema

const grade = new Schema({
    number: Number
})

module.exports = mongoose.model('grade', grade)
