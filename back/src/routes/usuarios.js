import { Router } from 'express';
import { body } from 'express-validator';
import { supabase } from '../config/supabase.js';
import { requireAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';

const router = Router();

// ─── GET /usuarios (alias de /perfil con auth opcional) ──────────────────────
router.get('/', requireAuth, async (req, res) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, nombre, apellido, tipo, avatar_url, created_at')
    .eq('id', req.user.id)
    .single();

  if (error) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(data);
});

// ─── GET /usuarios/perfil ─────────────────────────────────────────────────────
router.get('/perfil', requireAuth, async (req, res) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, nombre, apellido, tipo, avatar_url, created_at')
    .eq('id', req.user.id)
    .single();

  if (error) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(data);
});

// ─── PATCH /usuarios/perfil ───────────────────────────────────────────────────
router.patch(
  '/perfil',
  requireAuth,
  [
    body('nombre').optional().trim().notEmpty(),
    body('apellido').optional().trim().notEmpty(),
    body('avatar_url').optional().isURL(),
  ],
  validate,
  async (req, res) => {
    const { nombre, apellido, avatar_url } = req.body;
    const { data, error } = await supabase
      .from('usuarios')
      .update({ nombre, apellido, avatar_url, updated_at: new Date().toISOString() })
      .eq('id', req.user.id)
      .select()
      .single();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  }
);

// ─── GET /usuarios/guardados ──────────────────────────────────────────────────
router.get('/guardados', requireAuth, async (req, res) => {
  const { data, error } = await supabase
    .from('guardados')
    .select('libro:libros_completos(*), created_at')
    .eq('usuario_id', req.user.id)
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data.map((g) => g.libro));
});

// ─── GET /usuarios/descargas ──────────────────────────────────────────────────
router.get('/descargas', requireAuth, async (req, res) => {
  const { data, error } = await supabase
    .from('descargas')
    .select('libro:libros_completos(*), created_at')
    .eq('usuario_id', req.user.id)
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data.map((d) => ({ ...d.libro, descargado_en: d.created_at })));
});

// ─── GET /usuarios/estadisticas ───────────────────────────────────────────────
router.get('/estadisticas', requireAuth, async (req, res) => {
  const uid = req.user.id;

  const [{ count: descargados }, { count: guardados }, { data: publicaciones }] =
    await Promise.all([
      supabase.from('descargas').select('*', { count: 'exact', head: true }).eq('usuario_id', uid),
      supabase.from('guardados').select('*', { count: 'exact', head: true }).eq('usuario_id', uid),
      supabase.from('libros').select('id', { count: 'exact' })
        .eq('publicado', true)
        .eq('autor_id', uid),
    ]);

  res.json({ descargados, guardados, publicaciones: publicaciones?.length ?? 0 });
});

export default router;
