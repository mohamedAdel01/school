import React, { Component } from 'react'
import { Input, Select, Row, Col, Button } from 'antd'
const { Option } = Select

class Student_Signup extends Component {
  render () {
    return (
      <div id='Student_Signup' className='form'>
        <Row type='flex' justify='center' align='middle'>
          <Col md={{span: 16}} lg={{span: 10}} xs={{span: 20}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboUrHs7Pn1HT11yBxInE9e9mUAT6uoDruv0ASRATk4aMs3DKUgw' alt='student' />
          <h1>Sign Up</h1>
          <form>
            <Input placeholder='email' />
            <Input.Password placeholder='password' />
            <Input placeholder='username' />
            <Input placeholder='firstname' />
            <Input placeholder='lastname' />
            <Input placeholder='image url...' />
            <Select mode='multiple' style={{ width: '100%', 'marginTop': '10px'}} placeholder='select your classrooms'>
              <Option key='1'>
                class id
              </Option>
            </Select>
            <Select mode='multiple' style={{ width: '100%', 'marginTop': '10px'}} placeholder='select grades'>
              <Option key='1'>
                grades ids
              </Option>
            </Select>
            <Select style={{ width: '100%', 'marginTop': '10px'}} placeholder='select your subject'>
              <Option key='1'>
                class id
              </Option>
            </Select>
            <Button type='primary' block size='large'>
              Sign UP
            </Button>
          </form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Student_Signup
