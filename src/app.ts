import express from 'express';
import studentRoutes from './routes/studentRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());  // <<----- Aquí parseamos el body como JSON
app.use(cors());

// Rutas
app.use('/api', studentRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
