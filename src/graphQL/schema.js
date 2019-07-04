const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema} = graphql

// GRAPHQL QUERIES
const {grade, grades} = require('./queries/grade')
const {subject, subjects} = require('./queries/subject')
const {classroom, classrooms} = require('./queries/classroom')
const {teacher, teachers} = require('./queries/teacher')
const {student, students} = require('./queries/student')

// GRAPHQL ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    grade: grade,
    grades: grades,
    subject: subject,
    subjects: subjects,
    classroom: classroom,
    classrooms: classrooms,
    teacher: teacher,
    teachers: teachers,
    student: student,
    students: students
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
