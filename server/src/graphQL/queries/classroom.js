const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {ClassroomType} = require('../types/index')

// MONGODB MODELS
const ClassroomModel = require('../../models/classroom')

const ClassroomQueries = {
  classroom: {
    type: ClassroomType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return ClassroomModel.findById(args.id)
    }
  },
  classrooms: {
    type: new GraphQLList(ClassroomType),
    resolve() {
      return ClassroomModel.find({})
    }
  }
}

module.exports = ClassroomQueries
