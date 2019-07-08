// requirements in our app
// const express = require('express')
// const graphqlHTTP = require('express-graphql')
// const cors = require('cors')
// // const schema = require('./src/graphQL/schema') ##we will use it later##
// require('dotenv').config() // to give us access to get data from .env file

// // const routes = require('./src/router/routes') // i will use graphql insteed of normal routing

// // import database configuration i will explain it in it's file
// require('./config/mongo')

// // run our express app
// const app = express()

// // to give access to other servers to make request to our server 
// // and the other server on our case is front-end
// app.use(cors())

// routers
// app.use('/api', routes) if we need normal routing rathar than graphql

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// // listen to PORT 
// app.listen(process.env.PORT || 5000, () => {
//   console.log('welcome again nodejs')
// })
