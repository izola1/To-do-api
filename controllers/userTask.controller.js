import { pool } from '../config/config'

//function or endpoint to display all users tasks: (GET — /task | getTasks() )
export function getAllTasks(request, response, next) {
    pool.query('SELECT * FROM user_tasks ORDER BY user_tasks.id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//function or endpoint to display a single task: (GET — /users/:id | getTaskById() )
export function getTaskById(request, response, next) {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM user_tasks WHERE user_tasks.id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //function or endpoint to create a new task: (POST — task | createTask())
export function createTask(request, response, next) {
    const {name} = request.body
  
    pool.query('INSERT INTO user_tasks (description, state, user_id) VALUES ($1, $2, $3)',
     [description, state, user_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message:'Task successfully created'})
    })
  }