import { Router } from 'express';
import { supabaseAdmin } from '../config/supabase.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = Router();

// Recursos permitidos y la tabla/vista a la que mapean
const RESOURCE_MAP = {
  libros: { table: 'libros_completos' },
  usuarios: { table: 'usuarios' },
  testimonios: { table: 'testimonios' },
  videos: { table: 'videos' },
  autores: { table: 'autores' },
};

function ensureResource(name) {
  return RESOURCE_MAP[name] || null;
}

// ─── GET /admin/:resource ───────────────────────────────────────────────────
// Listar entidades (paginado). Query: ?page=1&limit=50&q=
router.get('/:resource', requireAuth, requireAdmin, async (req, res) => {
  const { resource } = req.params;
  const map = ensureResource(resource);
  if (!map) return res.status(400).json({ error: 'Recurso no permitido' });

  const page = Math.max(1, Number(req.query.page || 1));
  const limit = Math.min(200, Number(req.query.limit || 50));
  const offset = (page - 1) * limit;
  const q = String(req.query.q || '').trim();

  try {
    let builder = supabaseAdmin.from(map.table).select('*', { count: 'exact' }).range(offset, offset + limit - 1);

    // Búsqueda simple sobre columnas comunes
    if (q) {
      if (resource === 'libros') builder = builder.or(`titulo.ilike.%${q}%,autor_nombre.ilike.%${q}%,descripcion.ilike.%${q}%`);
      else if (resource === 'usuarios') builder = builder.or(`email.ilike.%${q}%,nombre.ilike.%${q}%,apellido.ilike.%${q}%`);
      else if (resource === 'testimonios') builder = builder.or(`texto.ilike.%${q}%,nombre_familia.ilike.%${q}%`);
      else if (resource === 'videos') builder = builder.or(`titulo.ilike.%${q}%,autor_nombre.ilike.%${q}%`);
      else if (resource === 'autores') builder = builder.or(`nombre.ilike.%${q}%`);
    }

    const { data, error, count } = await builder.order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data: data || [], total: count || 0, page, limit });
  } catch (err) {
    console.error('admin list error', err);
    res.status(500).json({ error: 'Error interno' });
  }
});

// ─── PATCH /admin/:resource/:id ─────────────────────────────────────────────
// Actualizar un registro por id (body con campos a actualizar)
router.patch('/:resource/:id', requireAuth, requireAdmin, async (req, res) => {
  const { resource, id } = req.params;
  const map = ensureResource(resource);
  if (!map) return res.status(400).json({ error: 'Recurso no permitido' });

  try {
    const { data, error } = await supabaseAdmin
      .from(map.table)
      .update({ ...req.body, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  } catch (err) {
    console.error('admin patch error', err);
    res.status(500).json({ error: 'Error interno' });
  }
});

// ─── DELETE /admin/:resource/:id ────────────────────────────────────────────
router.delete('/:resource/:id', requireAuth, requireAdmin, async (req, res) => {
  const { resource, id } = req.params;
  const map = ensureResource(resource);
  if (!map) return res.status(400).json({ error: 'Recurso no permitido' });

  try {
    const { error } = await supabaseAdmin.from(map.table).delete().eq('id', id);
    if (error) return res.status(400).json({ error: error.message });
    res.status(204).send();
  } catch (err) {
    console.error('admin delete error', err);
    res.status(500).json({ error: 'Error interno' });
  }
});

export default router;
