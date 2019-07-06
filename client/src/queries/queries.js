import { gql } from 'apollo-boost'

const GetGrades = gql`
{
    grades{
        number
        id
    }
}
`

export {GetGrades}