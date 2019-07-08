const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLID} = graphql
// const ObjectId = require('mongodb').ObjectID
// const GradeModel = require('../../models/grade')
// const ClassroomModel = require('../../models/classroom')
// const TeacherModel = require('../../models/teacher')
// const SubjectModel = require('../../models/subject')
// const StudentModel = require('../../models/student')

const ClassroomType = new GraphQLObjectType({
  name: 'Classroom',
  fields: () => ({
    id: {type: GraphQLID},
    number: {type: GraphQLInt},
    subjects_ids: {type: new GraphQLList(GraphQLID)},

    // --- relational data ---

    // grade: {
    //   type: GradeType,
    //   resolve(parent, args) {
    //     return GradeModel.findById(parent.grade_id)
    //   }
    // },

    // subjects: {
    //   type: new GraphQLList(SubjectType),
    //   resolve(parent, args) {
    //     return SubjectModel.find({_id: {$in: parent.subjects_ids.map(id => ObjectId(id))}})
    //   }
    // },

    // teachers: {
    //   type: new GraphQLList(TeacherType),
    //   resolve(parent, args) {
    //     return TeacherModel.find({classrooms_ids: {$elemMatch: {$in: [parent.id]}}})
    //   }
    // },

    // students: {
    //   type: new GraphQLList(StudentType),
    //   resolve(parent, args) {
    //     return StudentModel.find({classroom_id: parent.id})
    //   }
    // }
  })
})

const GradeType = new GraphQLObjectType({
  name: 'Grade',
  fields: () => ({
    id: {type: GraphQLID},
    number: {type: GraphQLInt},

    // --- relational data ---
    // classrooms: {
    //   type: new GraphQLList(ClassroomType),
    //   resolve(parent, args) {
    //     return ClassroomModel.find({grade_id: parent.id})
    //   }
    // }

  })
})

const StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    email: {type: GraphQLString},
    image: {type: GraphQLString},

    // relational data

    // classroom: {
    //   type: ClassroomType,
    //   resolve(parent, args) {
    //     return ClassroomModel.findById(parent.classroom_id)
    //   }
    // }
  })
})

const SubjectType = new GraphQLObjectType({
  name: 'Subject',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},

    // --- relational data ---

    // teachers: {
    //   type: new GraphQLList(TeacherType),
    //   resolve(parent) {
    //     return TeacherModel.find({subject_id: parent.id})
    //   }
    // }
  })
})

const TeacherType = new GraphQLObjectType({
  name: 'Teacher',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    email: {type: GraphQLString},
    image: {type: GraphQLString},
    subject_id: {type: GraphQLID},
    classrooms_ids: {type: new GraphQLList(GraphQLID)},

    // relational data
    // subject: {
    //   type: SubjectType,
    //   resolve(parent) {
    //     return SubjectModel.findById(parent.subject_id)
    //   }
    // },
    // classrooms: {
    //   type: new GraphQLList(ClassroomType),
    //   resolve(parent) {
    //     return ClassroomModel.find({_id: {$in: parent.classrooms_ids.map(id => ObjectId(id))}})
    //   }
    // }
  })
})

// export types to use in some where else
module.exports = {
  ClassroomType,
  GradeType,
  TeacherType,
  SubjectType,
StudentType}
