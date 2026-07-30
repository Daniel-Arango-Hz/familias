import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import authRoutes from './routes/auth.js';
import librosRoutes from './routes/libros.js';
import autoresRoutes from './routes/autores.js';
import videosRoutes from './routes/videos.js';
import galeriaRoutes from './routes/galeria.js';
import usuariosRoutes from './routes/usuarios.js';
import uploadRoutes from './routes/upload.js';

const app = express();
const PORT = process.env.PORT ?? 3002;

// ─── Middleware global ────────────────────────────────────────────────────────
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:4321')
  .split(',')
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, cb) => {
      // Permitir peticiones sin origin (Postman, curl, etc.) en desarrollo
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS bloqueado para origen: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: '50mb' }));

// ─── Rutas ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/libros', librosRoutes);
app.use('/api/libros', uploadRoutes);
app.use('/api/autores', autoresRoutes);
app.use('/api/videos', videosRoutes);
app.use('/api/galeria', galeriaRoutes);
app.use('/api/usuarios', usuariosRoutes);

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) =>
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
);

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));

// ─── Error handler ────────────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`🚀 [ACTUALIZADO] FamiliaLee API corriendo en http://localhost:${PORT}`);
});
