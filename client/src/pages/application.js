import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Teacher from '../components/application/teacher'
import Student from '../components/application/student'

class Application extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='Application'>
          <Switch>
            <Route exact path='/application/teacher' component={Teacher}></Route>
            <Route exact path='/application/student' component={Student}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Application
