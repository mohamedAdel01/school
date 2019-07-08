# school learning tutorial
**in this tutorial i will explain to how to build this school website <br> if you need to see full project you can go to master branch and make and follow steps to run it.**


before you start you need some knoldge about **nodeJs mongoDB graphQl reactJs apollo**

## let's get started
we will run server and make mongoDB models
1) make folder called server in any place in your computer then navigate to it in CMD then type `yarn init` or `npm init` and follow steps to make package.json file.
2) npm install or yarn install for `express cors dotenv express-graphql graphql mongoose` 
3) make `index.js` file in server folder
4) in this file type the code that not commented because the commented one we will use it later
5) in `index.js` file i tried to explain the purpose of every single line code
6) now make new folder called config we will make configuration for mongodb on it
in this file we will connect to mongo db , i will explain every thing in this file
7) now go to your cmd and navigate to index file then run `node index` and now your server is runing you can see in console the messages

**now let's make our models**

8) now we will make schemas .. this is about the structure for the data that will be in the data base <br> for exp.. teacher will have username and it will be string and password , firstname, lastname and some arrays <br> you can find all models in `models folder`

9) now you had finished from runing server and making data base models<br> we will use them later to make `save to database or find from database`

10) please ignore for now any files or folders i didn't mention them here and i will explain them in next lessons.

