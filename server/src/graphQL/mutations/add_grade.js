const graphql = require('graphql')
const {GraphQLInt} = graphql

// GRAPHQL TYPES
const {GradeType} = require('../types/index')

// MONGODB MODELS
const GradeModel = require('../../models/grade')

const GradeMutation = {
  type: GradeType,
  args: {
    number: {type: GraphQLInt}
  },
  resolve(parent, args) {
    let grade = new GradeModel({
      number: args.number
    })
    return grade.save()
  }
}

module.exports = GradeMutation
