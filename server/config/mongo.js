// require mongoose
const mongoose = require('mongoose')

// connect to mongoose with the uri for the database
//  you will find it in .env file
mongoose.connect(process.env.MONGO_URI + process.env.DB_NAME, {
  useNewUrlParser: true,
  useCreateIndex: true
})
mongoose.Promise = global.Promise
mongoose.connection.once('open', function (err) {
  if (err) {
    console.log('error found: ', err)
  } else {
    console.log('you are connect to database.')
  }
})
