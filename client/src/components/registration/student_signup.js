import React, { Component } from 'react'
import { Input, Select, Row, Col, Button } from 'antd'
import { graphql, compose } from "react-apollo";
import {GetClassrooms, AddStudent} from "../../queries/queries"
const { Option } = Select

class Student_Signup extends Component {
  render () {
    // console.log(this.props)
    return (
      <div id='Student_Signup' className='form'>
        {!this.props.GetClassrooms.loading && (
        <Row type='flex' justify='center' align='middle'>
          <Col md={{span: 16}} lg={{span: 10}} xs={{span: 20}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboUrHs7Pn1HT11yBxInE9e9mUAT6uoDruv0ASRATk4aMs3DKUgw' alt='student' />
          <h1>Sign Up</h1>
          <form>
            <Input placeholder='email' onChange={e => this.handleChanges(e, 'email')}/>
            <p className="danger">{this.state.error.email}</p>
            <Input.Password placeholder='password' onChange={e => this.handleChanges(e, 'password')}/>
            <p className="danger">{this.state.error.password}</p>
            <Input placeholder='username' onChange={e => this.handleChanges(e, 'username')}/>
            <p className="danger">{this.state.error.username}</p>
            <Input placeholder='firstname' onChange={e => this.handleChanges(e, 'firstname')}/>
            <p className="danger">{this.state.error.firstname}</p>
            <Input placeholder='lastname' onChange={e => this.handleChanges(e, 'lastname')}/>
            <p className="danger">{this.state.error.lastname}</p>
            <Input placeholder='image url...' onChange={e => this.handleChanges(e, 'image')}/>
            <p className="danger">{this.state.error.image}</p>
            {/* <Select style={{ width: '100%', 'marginTop': '10px'}} placeholder='select grade' onChange={e => this.handleSelect(e, 'grade_id')}>
              <Option key='1'>
                grade id
              </Option>
            </Select> */}
            {/* <p className="danger">{this.state.error.grade_id}</p> */}
            <Select style={{ width: '100%', 'marginTop': '10px'}} placeholder='select your classroom' onChange={e => this.handleSelect(e, 'classroom_id')}>
              {this.props.GetClassrooms.classrooms.map(classroom => (
                <Option key={classroom.id}>
                  {classroom.number}
                </Option>
              ))}
            </Select>
            <p className="danger">{this.state.error.classroom_id}</p>
            <Button onClick={this.submit.bind(this)} type='primary' block size='large'>
              Sign UP
            </Button>
          </form>
          </Col>
        </Row>
        )}
      </div>
    )
  }

    // DATA
    state = {
      req: {
        email: null,
        password: null,
        username: null,
        firstname: null,
        lastname: null,
        image: null,
        // grade_id: null,
        classroom_id: null
      },
      error: false
    }
  
    // METHODS
    handleChanges(e, type) {
      this.setState({
        error: false,
        req: 
          {
            ...this.state.req,
            [type]: e.target.value
          }
        })
    }

    handleSelect(e, type) {
      this.setState({
        error: false,
        req: 
          {
            ...this.state.req,
            [type]: e
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

      this.props.AddStudent({
        variables: this.state.req
      })
      
    }
}

export default compose(
  graphql(GetClassrooms, {name: 'GetClassrooms'}),
  graphql(AddStudent, {name: 'AddStudent'})
)(Student_Signup)
