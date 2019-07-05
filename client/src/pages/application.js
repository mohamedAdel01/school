import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Application from '../components/application/main'
import Teacer_Signup from '../components/registration/teacher_signup'
import Teacer_Signin from '../components/registration/teacher_signin'

class Application extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='Application'>
          <Switch>
            <Route exact path='/application' component={application}></Route>
            <Route exact path='/application/teacher_signup' component={Teacer_Signup}></Route>
            <Route exact path='/application/teacher_signin' component={Teacer_Signin}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Application
