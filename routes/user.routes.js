import { Router } from 'express';
const router = Router();
import { getAllUsers, getUserTasksByUserId, createUser, updateUser, deleteUser } from '../controllers/user.controller';


  //users routes
  router.get('/', getAllUsers);
  // router.get('/:id/tasks', getUserTasksByUserId);
  router.post('/', createUser);
  router.put('/:id', updateUser);
  router.delete('/:id', deleteUser);



export default router;
