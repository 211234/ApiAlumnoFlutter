import { Request, Response } from 'express';
import { db } from '../config/database';

interface StudentRequest {
    name: string;
    last_name: string;
}

export const registerStudent = async (req: Request, res: Response) => {
    const { name, last_name } = req.body as StudentRequest;

    if (!name || !last_name) {
        return res.status(400).json({ message: 'Por favor proporciona todos los campos.' });
    }

    try {
        const [result] = await db.query('INSERT INTO students (name, last_name) VALUES (?, ?)', [name, last_name]);
        res.status(201).json({ message: 'Estudiante registrado correctamente', studentId: (result as any).insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el estudiante', error });
    }
};


// Obtener todos los estudiantes
export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query('SELECT * FROM students');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los estudiantes', error });
    }
};
