const express = require('express');
const router = express.Router();
const db = require('../controllers/user.tasks.controller');


  //users routes
  router.get('/', db.getAllUsers);
  router.get('/:id', db.getUserById);
  router.post('/', db.createUser);
  router.put('/:id', db.updateUser);
  router.delete('/:id', db.deleteUser);
  router.get('/:id/tasks', db.getUserTasksByUserId);
  router.post('/:id/tasks/', db.createTask);
  router.put('/:id/tasks/:id', db.updateTask);



  module.exports = router;
