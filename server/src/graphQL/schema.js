const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema} = graphql

// GRAPHQL QUERIES
const {grade, grades} = require('./queries/grade')
const {subject, subjects} = require('./queries/subject')
const {classroom, classrooms} = require('./queries/classroom')
const {teacher, teachers} = require('./queries/teacher')
const {student, students} = require('./queries/student')

// MUTATIONS
const AddGrade = require("./mutations/add_grade")
const AddSubject = require("./mutations/add_subject")
const AddClassroom = require("./mutations/add_classroom")


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

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    AddGrade: AddGrade,
    AddSubject: AddSubject,
    AddClassroom: AddClassroom,
    // AddTeacher: AddTeacher,
    // AddStudent: AddStudent
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
