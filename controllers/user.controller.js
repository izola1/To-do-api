
import { pool } from '../config/config'

//function or endpoint to display all users: (GET — /users | getUsers() )
export function getAllUsers(request, response, next) {
    pool.query('SELECT * FROM users ORDER BY users.id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  
//function or endpoint to update a user: (PUT — /users/:id | updateUser())
export function updateUser(request, response, next) {
    const id = parseInt(request.params.id)
    const {name} = request.body
  
    pool.query(
      'UPDATE users SET name = $1 WHERE id = $2',
      [name, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }


//function or endpoint to delete a user: (DELETE — /users/:id | deleteUser())
export function deleteUser(request, response, next) {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE users.id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }


//function or endpoint to display a single registered user: (GET — /users/:id | getUserById() )
export function getUserTasksByUserId(request, response, next) {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT users.id, name, user_tasks.id as taskid, description, state FROM public.users JOIN public.user_tasks ON users.id = user_tasks.user_id WHERE users.id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


// //function or endpoint to create a new user: (POST — users | createUser())
// export function createUser(request, response, next) {
//     const {name} = request.body
  
//     pool.query('INSERT INTO users (name) VALUES ($1)',
//      [name], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).json({status: 'success', message:'User successfully created'})
//     })
//   }




