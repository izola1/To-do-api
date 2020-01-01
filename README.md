# To-do-node-api

This is a simple Node/Express RESTful To Do APP API. The goal of this simple application is to facilitate tracking of a user's day to day activities. This is the backend for the application with the various API endpoints.


# api live server running on
https://to-do-node-api.herokuapp.com  

# api documentation running on
https://izola1.github.io/To-do-node-api

# Models:

# Users {
           "id": integer,
           "name": "string"
 }
 
 # user_tasks {
                "id": integer,
                "description": "string",
                "state": "string",
                "user_id" integer
 }
           
 
 #### users endpoints

| Action | Endpoint                   | Functionality     |
| ------ | -------------------------- | ----------------- |
| POST   |  /api/v1/users             |  Create user      |
| GET    |  /api/v1/users/            | List all users    |
| GET    |  /api/v1/users/id:         | Fetch a user      |
| PUT    |  /api/v1/users/id:         | Update a user     |
| DELETE |  /api/v1/users/id:         | Delete a user     |


 #### users-tasks endpoints

| Action | Endpoint                   | Functionality         |
| ------ | -------------------------- | ----------------------|
| POST   |  /api/v1/users/id/tasks    |  Create task          |
| GET    |  /api/v1/users/id/tasks    | List a user's tasks   |
| PUT    |  /api/v1/users/id/tasks/id | Update a user task    |


# HOW TO RUN TO TEST THE APP

# clone project
$ git clone https://github.com/wincodes/teamwork-api.git

# cd into the project folder
$ cd teamwork-api

# install project dependencies
$ npm install

# set up database and environment variables
- create a postgres database on your local machine or online
- configure your .env and config.js file to connect to local or online postgres database
- create the users and users_tasks tables and load the sample data using the init.sql file
# start the development server
$ nodemon server

# test your endpoints
- use Postman to test the endpoints



           
