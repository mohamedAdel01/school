import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Input, Row, Col, Button } from 'antd'

class Teacher_Signin extends Component {
  render () {
    return (
      <div id='Teacher_Signin' className='form'>
        <Row type='flex' justify='center' align='middle'>
          <Col md={{span: 16}} lg={{span: 10}} xs={{span: 20}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeUtS8IprtrykN1eqlCG4jGOyzR_hoVtGmawe-cOwFgtRDXna' alt='teacher' />
          <h1>Sign IN</h1>
          <form>
            <Input placeholder='email' />
            <Input.Password placeholder='password' />
            <Button type='primary' block size='large'>
              Sign In
            </Button>
          </form>
          </Col>
        </Row>
      </div>
    )
  }

}

export default Teacher_Signin
