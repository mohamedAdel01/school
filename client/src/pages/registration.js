import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import MainPage from '../components/registration/main'
import Teacer_Signup from '../components/registration/teacher_signup'
import Teacer_Signin from '../components/registration/teacher_signin'
import Student_Signup from '../components/registration/student_signup'
import Student_Signin from '../components/registration/student_signin'

class Registration extends Component {
  render () {
    return (
        <div id='Registration'>
          <p className="regestration">
            <Link to='/registration'> Registration
            </Link>
          </p>
          <p className="admin">
            <Link to='/admin'> admin
            </Link>
          </p>
          <Switch>
            <Route exact path='/registration' component={MainPage}></Route>
            <Route path='/registration/teacher_signup' component={Teacer_Signup}></Route>
            <Route path='/registration/teacher_signin' component={Teacer_Signin}></Route>
            <Route path='/registration/student_signup' component={Student_Signup}></Route>
            <Route path='/registration/student_signin' component={Student_Signin}></Route>
          </Switch>
        </div>
    )
  }
}

export default Registration
