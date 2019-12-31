
const { pool } = require('../config/config')

//function or endpoint to display all users: (GET — /users | getUsers() )
exports.getAllUsers = (request, response, next) => {
    pool.query('SELECT * FROM users ORDER BY users.id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


//function or endpoint to display a single user: (GET — /users/:id | getUserById() )
exports.getUserById = (request, response, next) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE users.id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


//function or endpoint to display all users tasks: (GET — /task | getTasks() )
exports.getAllTasks = (request, response, next) => {
  pool.query('SELECT * FROM user_tasks ORDER BY user_tasks.id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//function or endpoint to display a single task: (GET — /users/:id | getTaskById() )
exports.getTaskById = (request, response, next) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM user_tasks WHERE user_tasks.id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//function or endpoint to create a new task: (POST — task | createTask())
exports.createTask = (request, response, next) => {
  const {description, state, user_id} = request.body

  pool.query('INSERT INTO user_tasks (description, state, user_id) VALUES ($1, $2, $3)',
   [description, state, user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json({status: 'success', message:'Task successfully created'})
  })
}

//function or endpoint to update a task: (PUT — /tasks/:id | updateTask())
exports.updateTask = (request, response, next) => {
  const id = parseInt(request.params.id)
  const {description, state, user_id} = request.body

  pool.query(
    'UPDATE user_tasks SET description = $1, state = $2, user_id = $3 WHERE id = $4',
    [description, state, user_id, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Task modified with ID: ${id}`)
    }
  )
}

//function or endpoint to delete a task: (DELETE — /tasks/:id | deleteTask())
exports.deleteTask = (request, response, next) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM user_tasks WHERE user_tasks.id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Task deleted with ID: ${id}`)
  })
}

  
//function or endpoint to update a user: (PUT — /users/:id | updateUser())
exports.updateUser = (request, response, next) => {
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
exports.deleteUser = (request, response, next) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE users.id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }


//function or endpoint to display a single registered user: (GET — /users/:id | getUserById() )
exports.getUserTasksByUserId = (request, response, next) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT users.id, name, user_tasks.id as taskid, description, state FROM public.users JOIN public.user_tasks ON users.id = user_tasks.user_id WHERE users.id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


//function or endpoint to create a new user: (POST — users | createUser())
exports.createUser = (request, response, next) => {
    const {name} = request.body
  
    pool.query('INSERT INTO users (name) VALUES ($1)',
     [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message:'User successfully created'})
    })
  }




