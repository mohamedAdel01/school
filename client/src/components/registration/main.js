import React, { Component } from 'react'
import { Row, Col } from 'antd'

class Main extends Component {
  render () {
    return (
      <div id='Main'>
        <Row gutter={6}>
          <Col md={{span: 24}} lg={{span: 12}}>
          <Row type='flex' justify='center'>
            <section>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeUtS8IprtrykN1eqlCG4jGOyzR_hoVtGmawe-cOwFgtRDXna' alt='teacher' />
              <h1>teacher</h1>
            </section>
          </Row>
          </Col>
          <Col md={{span: 24}} lg={{span: 12}}>
          <Row type='flex' justify='center'>
            <section>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboUrHs7Pn1HT11yBxInE9e9mUAT6uoDruv0ASRATk4aMs3DKUgw' alt='student' />
              <h1>student</h1>
            </section>
          </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Main
