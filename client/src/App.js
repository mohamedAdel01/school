import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css'

// COMPONENTS
import Registration from './pages/registration'
import Application from './pages/application'
import Admin from './pages/admin'
import Home from './pages/home'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
             <div id='main'>
               <Switch>
                 <Route exact path='/' component={Home}></Route>
                 <Route path='/registration' component={Registration}></Route>
                 <Route path='/application' component={Application}></Route>
                 <Route path='/admin' component={Admin}></Route>
               </Switch>
             </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
