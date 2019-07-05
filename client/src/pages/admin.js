import React, { Component } from 'react'
import { Input, Select, Row, Col, Button } from 'antd'
const { Option } = Select

class Admin extends Component {
  render () {
    return (
      <div id='Admin'>
        <h3>there is no time to make validation for inputs so please add the same sort of data</h3>
        <Row className="admin" type="flex" gutter={100} justify="center">
          <Col span={7}>
          <h1>add grade for testing</h1>
          <form>
            <Input placeholder='put only number of grade' />
            <Button type="primary" block>
              Add
            </Button>
          </form>
          </Col>
          <Col span={7}>
          <h1>add subject for testing</h1>
          <form>
            <Input placeholder='name of subject' />
            <Button type="primary" block>
              Add
            </Button>
          </form>
          </Col>
          <Col span={7}>
          <h1>add classroom for testing</h1>
          <form>
            <Input placeholder='put only number of classroom' />
            <Select style={{ width: '100%', 'marginTop': '10px'}} placeholder='select grade...'>
              <Option key='1'>
                grade id
              </Option>
            </Select>
            <Select mode='multiple' style={{ width: '100%', 'marginTop': '10px'}} placeholder='select subjects....'>
              <Option key='1'>
                subjects id
              </Option>
            </Select>
            <Button type="primary" block>
              Add
            </Button>
          </form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Admin
