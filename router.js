import { Router } from 'express';
import MovieController from './MovieController.js';
import FileController from './FileController.js';

const router = Router();

router.post('/movies', MovieController.create);
router.post('/upload', FileController.upload);
router.get('/movies', MovieController.getAll);
router.get('/movies/:id', MovieController.getOne);
router.put('/movies', MovieController.update);
router.delete('/movies/:id', MovieController.delete);

export default router;  
 