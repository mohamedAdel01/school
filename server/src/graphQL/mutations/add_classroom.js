const graphql = require('graphql')
const {GraphQLInt, GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {ClassroomType} = require('../types/index')

// MONGODB MODELS
const ClassroomModel = require('../../models/classroom')

const ClassroomMutation = {
  type: ClassroomType,
  args: {
    number: {type: GraphQLInt},
    grade_id: {type: GraphQLID},
    subjects_ids: {type: new GraphQLList(GraphQLID)},
  },
  resolve(parent, args) {
    let classroom = new ClassroomModel({
      number: args.number,
      grade_id: args.grade_id,
      subjects_ids: args.subjects_ids
    })
    return classroom.save()
  }
}

module.exports = ClassroomMutation
