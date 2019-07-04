// requirements
const express = require('express')
const graphqlHTTP = require('express-graphql')
// const routes = require('./src/router/routes') // we will use graphql insteed
const schema = require('./src/graphQL/schema')
require('dotenv').config()

// import database config
require('./config/mongo')

// run app
const app = express()

// routers
// app.use('/api', routes)

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// listen to PORT
app.listen(process.env.PORT || 5000, () => {
  console.log('welcome again nodejs')
})
