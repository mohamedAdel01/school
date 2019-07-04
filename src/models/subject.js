const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subject = new Schema({
    name: String
})

module.exports = mongoose.model('subject', subject)