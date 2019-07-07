# school
*to run project please follow this steps*

.first run server
1) open cmd and navigate to cd "/server"
2) yarn install
3) run server with "node index"

.second run client

4) open cmd and navigate to cd "/client"
5) yarn install
6) yarn start

-----
used technologies in this site => 
-
Nodejs
-
mongodb
-
GraphQL
-
ReactJs
-

to see the task you only need to signup as teacher and select all class number to see more students then press sign up and you will navigated to teacher page you can see classes press on it to see student in it


-some issues missed in this website but i know how to made but there is no time for it but i will menssion it for you: 
Authentication

multilanguage

validation for fields

signIN for both teacher and student

student page

i didn't care about adding more features on front-end but i mainly focused on backend and with making relation data you can go to 
http://localhost:5000/graphql after runing server and make some graphql queries and see data and it's relation that give you ability to 
get any data from other one you can see relation on the right hand side of the page you will see **"Root Types"** ... study project well and you will see what i mean

i think this query will illustrate what i mean.. put this in graphql server and see relation between items.

```
{
  teachers{
    id
    username
    firstname
    lastname
    subject{
      id
      name
    }
    classrooms {
      id
      number
      students{
        username
        firstname
        lastname
        id
      }
    }
  }
}
```

thank you for reading.
