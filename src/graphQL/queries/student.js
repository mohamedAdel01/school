const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {StudentType} = require('../types/index')

// MONGODB MODELS
const StudentModel = require('../../models/student')

const StudentQueries = {
  student: {
    type: StudentType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return StudentModel.findById(args.id)
    }
  },
  students: {
    type: new GraphQLList(StudentType),
    resolve() {
      return StudentModel.find({})
    }
  }
}

module.exports = StudentQueries
