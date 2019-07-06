import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { graphql, compose } from 'react-apollo'
import { GetStudents, GetTeacher } from '../../queries/queries'

class Teacher extends Component {
  render () {
    let teacher = this.props.GetTeacher.teacher
    return (
      <div id='Teacher'>
        {!this.props.GetTeacher.loading && (
         <div>
           <Row type='flex' align='middle'>
             <Col span={4}>
             <Row type='flex' justify='center'>
               <img src='data:image/png;base64,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'
                 alt='teacher' />
             </Row>
             </Col>
             <Col span={4}>
             <h1>{teacher.username}</h1>
             <h2>{teacher.firstname} {teacher.lastname}</h2>
             <h2>{teacher.subject.name}</h2>
             </Col>
             <Col span={16}>
              {teacher.classrooms.map(classroom => (
                <Button
                  key={classroom.id}
                  // onClick={this.getStudens(classroom)}
                  type='primary'
                  size='large'>
                  classroom:
                  {classroom.number}
                </Button>
              ))}
             </Col>
           </Row>
           <hr/>
           <Row>
             <p>
               mohamed adel
             </p>
           </Row>
         </div>
         )}
      </div>
    )
  }

  getStudens = (id) => {
    console.log(id)
  // this.props.GetStudents({
  //   variables: id
  // })
  }
}

export default compose(
  graphql(GetTeacher, {
    name: 'GetTeacher',
    options: (props) => {
      return {
        variables: {
          id: localStorage.getItem('id')
        }
      }
    }
  }),
  graphql(GetStudents, {name: 'GetStudents'})
)(Teacher)
