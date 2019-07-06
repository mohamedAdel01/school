import { gql } from 'apollo-boost'

const GetClassrooms = gql`
{
    classrooms {
        id
        number
        subjects{
            id
            name
        }
    }
}
`
const AddTeacher = gql`
    mutation(
        $password: String,
        $username: String,
        $firstname: String,
        $lastname: String,
        $email: String,
        $image: String,
        $subject_id: ID,
        $classrooms_ids: [ID],
        $grades_ids: [ID]
        ){
        AddTeacher(      
            password: $password,
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            image: $image,
            subject_id: $subject_id,
            classrooms_ids: $classrooms_ids,
            grades_ids: $grades_ids
        ) {
            id
        }
    }
`

const AddStudent = gql`
    mutation(
        $password: String,
        $username: String,
        $firstname: String,
        $lastname: String,
        $email: String,
        $image: String,
        $classroom_id: ID,
        $grade_id: ID
        ){
        AddStudent(      
            password: $password,
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            image: $image,
            classroom_id: $classroom_id,
            grade_id: $grade_id
        ) {
            id
        }
    }
`

const GetTeacher = gql`
    query($id: ID) {
        teacher(id: $id) {
            id
            email
            username
            firstname
            lastname
            image
            subject{
                id
                name
            }
            classrooms{
                id
                number
            }
        }
    }
`

const GetStudents = gql`
    {
        classroom{
            name
        }
    }
`

export { GetClassrooms, AddTeacher, AddStudent, GetTeacher, GetStudents }
