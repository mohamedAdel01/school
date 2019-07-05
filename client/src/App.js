import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"

// COMPONENTS
import Registration from './pages/registration'
import Application from './pages/application'
import Admin from './pages/admin'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='main'>
          <Switch>
            {/* <Route exact path='/' component={Login}></Route> */}
            <Route exact path='/registration' component={Registration}></Route>
            <Route exact path='/application' component={Application}></Route>
            <Route exact path='/admin' component={Admin}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
