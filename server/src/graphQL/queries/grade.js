const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {GradeType} = require('../types/index')

// MONGODB MODELS
const GradeModel = require('../../models/grade')

const GradeQueries = {
  grade: {
    type: GradeType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return GradeModel.findById(args.id)
    }
  },
  grades: {
    type: new GraphQLList(GradeType),
    resolve() {
      return GradeModel.find({})
    }
  }
}

module.exports = GradeQueries
