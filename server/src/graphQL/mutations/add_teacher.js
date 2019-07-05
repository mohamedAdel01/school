const graphql = require('graphql')
const {GraphQLString, GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {TeacherType} = require('../types/index')

// MONGODB MODELS
const TeacherModel = require('../../models/teacher')

const TeacherMutation = {
  type: TeacherType,
  args: {
    username: {type: GraphQLString},
    password: {type: GraphQLString},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    email: {type: GraphQLString},
    image: {type: GraphQLString},
    subject_id: {type: GraphQLID},
    classrooms_ids: {type: new GraphQLList(GraphQLID)},
    grades_ids: {type: new GraphQLList(GraphQLID)}
  },
  resolve(parent, args) {
    let teacher = new TeacherModel({
      username: args.username,
      password: args.password,
      firstname: args.firstname,
      lastname: args.lastname,
      email: args.email,
      image: args.image,
      subject_id: args.subject_id,
      classrooms_ids: args.classrooms_ids,
      grades_ids: args.grades_ids
    })
    return teacher.save()
  }
}

module.exports = TeacherMutation
