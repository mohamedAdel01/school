import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"

// COMPONENTS
import Registration from './pages/registration'
import Application from './pages/application'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='main'>
          <Switch>
            {/* <Route exact path='/' component={Login}></Route> */}
            <Route path='/registration' component={Registration}></Route>
            <Route path='/application' component={Application}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
