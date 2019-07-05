const graphql = require('graphql')
const {GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {StudentType} = require('../types/index')

// MONGODB MODELS
const StudentModel = require('../../models/student')

const StudentMutation = {
  type: StudentType,
  args: {
    username: {type: GraphQLString},
    password: {type: GraphQLString},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    email: {type: GraphQLString},
    image: {type: GraphQLString},
    classroom_id: {type: GraphQLID},
    grade_id: {type: GraphQLID}
  },
  resolve(parent, args) {
    let student = new StudentModel({
      username: args.username,
      password: args.password,
      firstname: args.firstname,
      lastname: args.lastname,
      email: args.email,
      image: args.image,
      classroom_id: args.classroom_id,
      grade_id: args.grade_id
    })
    return student.save()
  }
}

module.exports = StudentMutation
