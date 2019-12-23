import express from 'express';
import { json, urlencoded } from 'body-parser';
const app = express()
import users from './routes/user.routes';
//import tasks from './routes/userTask.routes';


const port = process.env.PORT || 3000;

app.use(json())
app.use(
  urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

 //users routes
 app.use('/api/v1/users', users);

 //single user and associated tasks route
// app.use('/api/v1/users/:id/tasks', users);

  //taks routes
  //app.use('/api/v1/tasks', tasks);


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })