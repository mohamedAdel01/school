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

export { GetClassrooms, AddTeacher }
