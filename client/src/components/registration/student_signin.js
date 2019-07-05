import React, { Component } from 'react'
import { Input, Row, Col, Button } from 'antd'


class Student_Signin extends Component {
  render () {
    return (
      <div id='Student_Signin' className='form'>
        <Row type='flex' justify='center' align='middle'>
          <Col md={{span: 16}} lg={{span: 10}} xs={{span: 20}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboUrHs7Pn1HT11yBxInE9e9mUAT6uoDruv0ASRATk4aMs3DKUgw' alt='student' />
          <h1>Sign IN</h1>
          <form>
            <Input placeholder='email' onChange={e => this.handleSubmit(e, 'email')}/>
            <p className="danger">{this.state.error.email}</p>
            <Input.Password placeholder='password' onChange={e =>this.handleSubmit(e, 'password')}/>
            <p className="danger">{this.state.error.password}</p>
            <Button onClick={this.submit.bind(this)} type='primary' block size='large'>
              Sign In
            </Button>
          </form>
          </Col>
        </Row>
      </div>
    )
  }

  // DATA
  state = {
    req: {
      email: null,
      password: null
    },
    error: false
  }

  // METHODS
  handleSubmit(e, type) {
    this.setState({
      error: false,
      req: 
        {
          ...this.state.req,
          [type]: e.target.value
        }
      })
  }

  submit() {
    let check = Object.keys(this.state.req).filter(key => !this.state.req[key])
    if(check.length) {
      check.map(key => {
        this.setState({
          error: 
            {
              ...this.state.error,
              [key]: "please fill this input"
            }
          })
      })
      return
    }
    console.log(this.state)
  }
}

export default Student_Signin
