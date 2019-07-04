import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

class Main extends Component {
  render () {
    return (
      <div id='Main'>
        <Row type='flex' gutter={6}>
          <Col md={{span: 24}} lg={{span: 12}}>
          <Row
            className='teacher_sec'
            type='flex'
            justify='center'
            align='middle'>
            <section>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeUtS8IprtrykN1eqlCG4jGOyzR_hoVtGmawe-cOwFgtRDXna' alt='teacher' />
              <h1>Teacher</h1>
              <Button className="gr" block size='large'>
                Sign UP
              </Button>
              <Button block type='primary' size='large'>
                Sign IN
              </Button>
            </section>
          </Row>
          </Col>
          <Col md={{span: 24}} lg={{span: 12}}>
          <Row
            className='student_sec'
            type='flex'
            justify='center'
            align='middle'>
            <section>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboUrHs7Pn1HT11yBxInE9e9mUAT6uoDruv0ASRATk4aMs3DKUgw' alt='student' />
              <h1>Student</h1>
              <Button className="gr" block size='large'>
                Sign UP
              </Button>
              <Button block type='primary' size='large'>
                Sign IN
              </Button>
            </section>
          </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Main
