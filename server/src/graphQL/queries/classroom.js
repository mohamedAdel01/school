const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {ClassroomType} = require('../types/index')

// MONGODB MODELS
const ClassroomModel = require('../../models/classroom')

const ClassroomQueries = {
  // query for find one classroom with id of it
  classroom: {
    type: ClassroomType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return ClassroomModel.findById(args.id)
    }
  },
  // query for find all classrooms
  classrooms: {
    type: new GraphQLList(ClassroomType),
    resolve() {
      return ClassroomModel.find({})
    }
  }
}

// export query to use in somewhere else
module.exports = ClassroomQueries
