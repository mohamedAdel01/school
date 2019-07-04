const mongoose = require('mongoose')

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
