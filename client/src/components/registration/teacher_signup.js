import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Input, Select, Row, Col, Button } from 'antd'
const { Option } = Select

class Teacher_Signup extends Component {
  render () {
    return (
      <div id='Teacher_Signup' className='form'>
        <Row type='flex' justify='center' align='middle'>
          <Col md={{span: 16}} lg={{span: 10}} xs={{span: 20}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeUtS8IprtrykN1eqlCG4jGOyzR_hoVtGmawe-cOwFgtRDXna' alt='teacher' />
          <h1>Sign Up</h1>
          <form>
            <Input placeholder='email' />
            <Input.Password placeholder='password' />
            <Input placeholder='username' />
            <Input placeholder='firstname' />
            <Input placeholder='lastname' />
            <Select mode='multiple' style={{ width: '100%', 'margin-top': '10px'}} placeholder='select your classrooms'>
              <Option key='1'>
                class id
              </Option>
            </Select>
            <Select mode='multiple' style={{ width: '100%', 'margin-top': '10px'}} placeholder='select grades'>
              <Option key='1'>
                grades ids
              </Option>
            </Select>
            <Select style={{ width: '100%', 'margin-top': '10px'}} placeholder='select your subject'>
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

export default Teacher_Signup