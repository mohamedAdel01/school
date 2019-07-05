import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import MainPage from '../components/registration/main'
import Teacer_Signup from '../components/registration/teacher_signup'
import Teacer_Signin from '../components/registration/teacher_signin'
import Student_Signup from '../components/registration/student_signup'
import Student_Signin from '../components/registration/student_signin'

class Registration extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='Registration'>
          <p>
            <Link to='/registration'> Registration
            </Link>
          </p>
          <Switch>
            <Route exact path='/registration' component={MainPage}></Route>
            <Route exact path='/registration/teacher_signup' component={Teacer_Signup}></Route>
            <Route exact path='/registration/teacher_signin' component={Teacer_Signin}></Route>
            <Route exact path='/registration/student_signup' component={Student_Signup}></Route>
            <Route exact path='/registration/student_signin' component={Student_Signin}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Registration
