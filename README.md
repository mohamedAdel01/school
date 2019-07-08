# school learning tutorial les_2
**for now i will comment any code i had explained it before or any codes that we will learn it later**



## let's get started
we will make graphQl types for graphql schema

1) make new folder `graphQL` inside it make folder called `type` then make `index.js` file<br> **we should make all types in one file because `module cycle problem ` you can search about it to understand more**

2) any graphql type object consist of 2 thing 
name of it and it should be uniquie and fields which contain type of fields that we want graphQL to recogonize on the data we get from mongo database

3) for now ignore any relation data i will comment it by the way

4) now make query files which make graphql connect to fields in mongodb schema to let graphql get specific data only .. so let us make a new folder in graphQL with name `queries` <br>
first at any file let's say classroom we will <br> import type for it from types files and get mongo model for it

5) any query consists of `type` which is type that we made before , and `args` which that we will pass in the query later like id of class that we will get and `resolve` and this is the function that we will do with this query like get data and save data this will be in mutation later

6) now we need to make schema and add this query inside it .. let's make schema file and add this queries 

7) let's now make nodeJs know that we will use graphQl add the graphQL code this will be in the index.js file

8) now run node app with `node index` and go to ` http://localhost:5000/graphql` and play with graphQl queries for now will return `null` because there is no data in database but look at right you will see in documentation in **"Root Types"** you will see your queries 

in the next we will talk about relation between data.

 

