const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {SubjectType} = require('../types/index')

// MONGODB MODELS
const SubjectModel = require('../../models/subject')

const SubjectQueries = {
  subject: {
    type: SubjectType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return SubjectModel.findById(args.id)
    }
  },
  subjects: {
    type: new GraphQLList(SubjectType),
    resolve() {
      return SubjectModel.find({})
    }
  }
}

module.exports = SubjectQueries
