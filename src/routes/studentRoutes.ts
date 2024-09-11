import { Router } from 'express';
import { registerStudent, getAllStudents } from '../controller/studentController';

const router = Router();

router.post('/student', registerStudent); // Registro de estudiantes
router.get('/students', getAllStudents);   // Obtener todos los estudiantes

export default router;
