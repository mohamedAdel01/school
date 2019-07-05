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

export default Student_Signin
