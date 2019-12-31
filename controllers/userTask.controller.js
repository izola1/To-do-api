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

//function or endpoint to update a task: (PUT — /tasks/:id | updateTask())
export function updateTask(request, response, next) {
    const id = parseInt(request.params.id)
    const {description, state, user_id} = request.body
  
    pool.query(
      'UPDATE user_tasks SET description = $1, state = $2, user_id = $3 WHERE id = $4',
      [description, state, user_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  //function or endpoint to delete a task: (DELETE — /tasks/:id | deleteTask())
export function deleteTask(request, response, next) {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM user_tasks WHERE user_tasks.id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Task deleted with ID: ${id}`)
    })
  }
