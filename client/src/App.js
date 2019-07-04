import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Login from './pages/login'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='main'>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/register' component={Login}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
