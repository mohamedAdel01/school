import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import './App.css'

// COMPONENTS
import Registration from './pages/registration'
import Application from './pages/application'
import Admin from './pages/admin'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

client
  .query({
    query: gql`
      {
        grades{
          number
        }
      }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='main'>
          <Switch>
            {/* <Route exact path='/' component={Login}></Route> */}
            <Route path='/registration' component={Registration}></Route>
            <Route path='/application' component={Application}></Route>
            <Route path='/admin' component={Admin}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
