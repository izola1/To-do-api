import { Router } from 'express';
const router = Router();
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/userTask.controller';


  //tasks routes
  router.get('/', getAllTasks);
  router.get('/:id', getTaskById);
  router.post('/', createTask);
  router.put('/:id', updateTask);
  router.delete('/:id', deleteTask);



export default router;