import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Teacher from '../components/application/teacher'
import Student from '../components/application/student'

class Application extends Component {
  render () {
    return (
      <div id='Application'>
        <Switch>
          <Route path='/application/teacher' component={Teacher}></Route>
          <Route path='/application/student' component={Student}></Route>
        </Switch>
      </div>
    )
  }
}

export default Application
