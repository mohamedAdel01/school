import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { graphql, Query } from 'react-apollo'
import { GetStudents, GetTeacher } from '../../queries/queries'

class Teacher extends Component {
  render () {
    let teacher = this.props.GetTeacher.teacher
    console.log(this.props)
    return (
      <div id='Teacher'>
        {!this.props.GetTeacher.loading && (
         <div>
           <Row type='flex' align='middle'>
             <Col span={4}>
             <Row type='flex' justify='center'>
               <img src={teacher.image}
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
                  onClick={(e) => {this.getStudens(classroom)}}
                  type='primary'
                  size='large'>
                  classroom: &nbsp;
                  <span className="number">
                    {classroom.number}
                  </span>
                </Button>
              ))}
             </Col>
           </Row>
           <hr/>
           <Row>
             <h3>students in classroom: {this.state.classNum}</h3>
             {this.state.classId && (
              <Query query={GetStudents} variables={{id: this.state.classId}}>
                {({ data, loading, error }) => {
                  if (loading) return "loading...";
                  if (error) return <p>ERROR: {error.message}</p>;

                  return (
                    <div className="students">
                      {data.classroom.students.map(student => (
                        <p key={student.id}>
                            {student.username}
                        </p>
                      ))}          
                    </div>
                  );
                }}
              </Query>
             )}
           </Row>
         </div>
         )}
      </div>
    )
  }

  state = {
    classId: null,
    classNum: null
  }

  getStudens = (classroom) => {
    console.log(this.props)
    this.setState({
      classId: classroom.id,
      classNum: classroom.number
    })    
  }
}

export default 
  graphql(GetTeacher, {
    name: 'GetTeacher',
    options: () => {
      return {
        variables: {
          id: localStorage.getItem('id')
        }
      }
    }
  })(Teacher)
