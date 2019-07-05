const graphql = require('graphql')
const {GraphQLString} = graphql

// GRAPHQL TYPES
const {SubjectType} = require('../types/index')

// MONGODB MODELS
const SubjectModel = require('../../models/subject')

const SubjectMutation = {
  type: SubjectType,
  args: {
    name: {type: GraphQLString}
  },
  resolve(parent, args) {
    let subject = new SubjectModel({
      name: args.name
    })
    return subject.save()
  }
}

module.exports = SubjectMutation
