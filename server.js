const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const usersTasks = require('./routes/user.tasks.routes');

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
    response.json({ info: 'Welcome to my simple To-Do NODE.JS REST API' })
  })

 //users/Tasks routes
 app.use('/api/v1/users', usersTasks);
 app.use('/api/v1/users/:id/tasks', usersTasks);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })