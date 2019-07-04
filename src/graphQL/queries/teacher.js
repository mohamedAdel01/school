const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {TeacherType} = require('../types/index')

// MONGODB MODELS
const TeacherModel = require('../../models/teacher')

const TeacherQueries = {
  teacher: {
    type: TeacherType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return TeacherModel.findById(args.id)
    }
  },
  teachers: {
    type: new GraphQLList(TeacherType),
    resolve() {
      return TeacherModel.find({})
    }
  }
}

module.exports = TeacherQueries
