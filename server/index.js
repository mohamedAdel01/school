// requirements
const express = require('express')
const graphqlHTTP = require('express-graphql')
// const routes = require('./src/router/routes') // i will use graphql insteed of normal routing
const schema = require('./src/graphQL/schema')
require('dotenv').config()

// import database config
require('./config/mongo')

// run app
const app = express()

// routers
// app.use('/api', routes) if we need normal routing rathar than graphql

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// listen to PORT
app.listen(process.env.PORT || 5000, () => {
  console.log('welcome again nodejs')
})
