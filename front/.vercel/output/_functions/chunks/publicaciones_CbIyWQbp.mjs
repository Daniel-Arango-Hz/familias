import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as defineScriptVars, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as $$Layout } from "./Layout_DxCEpPIS.mjs";
import { t as $$Header } from "./Header_CxLS-9e8.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Dr-dwdrw.mjs";
//#region src/pages/panel/publicaciones.astro
var publicaciones_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Publicaciones,
	file: () => $$file,
	url: () => $$url
});
var $$Publicaciones = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Mis Libros – FamiliaLee",
		"description": "Libros publicados por el usuario.",
		"data-astro-cid-w5adyq6c": true
	}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-w5adyq6c": true })}${maybeRenderHead($$result2)}<main data-astro-cid-w5adyq6c><section class="panel-hero" data-astro-cid-w5adyq6c><div class="container panel-hero-inner" data-astro-cid-w5adyq6c><div class="panel-avatar" aria-hidden="true" data-astro-cid-w5adyq6c>✍️</div><div data-astro-cid-w5adyq6c><h1 class="panel-nombre" data-astro-cid-w5adyq6c>Mis Libros</h1><p class="panel-email" data-astro-cid-w5adyq6c>Tus publicaciones en FamiliaLee</p></div></div></section><section class="section" data-astro-cid-w5adyq6c><div class="container panel-layout" data-astro-cid-w5adyq6c><nav class="panel-nav" aria-label="Navegación del panel" data-astro-cid-w5adyq6c><ul class="panel-nav-list" data-astro-cid-w5adyq6c><li data-astro-cid-w5adyq6c><a href="/panel/guardados" class="panel-nav-link" data-astro-cid-w5adyq6c>Guardados</a></li><li data-astro-cid-w5adyq6c><a href="/panel/publicaciones" class="panel-nav-link active" data-astro-cid-w5adyq6c>Publicaciones</a></li></ul></nav><div class="panel-content" data-astro-cid-w5adyq6c><div class="stats-row" id="published-stats" style="display: none;" data-astro-cid-w5adyq6c><div class="stat-card" data-astro-cid-w5adyq6c><strong id="stat-publicaciones" data-astro-cid-w5adyq6c>0</strong><span data-astro-cid-w5adyq6c>Publicaciones</span></div><div class="stat-card" data-astro-cid-w5adyq6c><strong id="stat-descargas" data-astro-cid-w5adyq6c>0</strong><span data-astro-cid-w5adyq6c>Descargas</span></div><div class="stat-card" data-astro-cid-w5adyq6c><strong id="stat-guardados" data-astro-cid-w5adyq6c>0</strong><span data-astro-cid-w5adyq6c>Guardados</span></div></div><div class="section-header section-header-row" data-astro-cid-w5adyq6c><div class="section-header" data-astro-cid-w5adyq6c><h2 data-astro-cid-w5adyq6c>Libros Publicados</h2><p id="published-count" data-astro-cid-w5adyq6c>Cargando...</p></div><a href="/subir-libro" class="btn-link" data-astro-cid-w5adyq6c>+ Publicar nuevo</a></div><div id="published-grid" class="panel-books-grid" data-astro-cid-w5adyq6c></div><div id="published-empty" class="empty-state" style="display: none;" data-astro-cid-w5adyq6c><p data-astro-cid-w5adyq6c>Aún no has publicado libros.</p><a href="/subir-libro" class="btn-link" data-astro-cid-w5adyq6c>Subir primer libro</a></div><div id="deleteConfirmOverlay" class="delete-modal-overlay" aria-hidden="true" data-astro-cid-w5adyq6c><div class="delete-modal" role="dialog" aria-modal="true" aria-labelledby="deleteConfirmTitle" aria-describedby="deleteConfirmMessage" data-astro-cid-w5adyq6c><h3 id="deleteConfirmTitle" data-astro-cid-w5adyq6c>Confirmar eliminación</h3><p id="deleteConfirmMessage" data-astro-cid-w5adyq6c>¿Seguro que quieres eliminar esta publicación?</p><div class="delete-modal-actions" data-astro-cid-w5adyq6c><button type="button" class="delete-cancel-btn" id="deleteCancelBtn" data-astro-cid-w5adyq6c>Cancelar</button><button type="button" class="delete-confirm-btn" id="deleteConfirmBtn" data-astro-cid-w5adyq6c>Eliminar</button></div></div></div></div></div></section></main>${renderComponent($$result2, "CtaFooter", $$CtaFooter, { "data-astro-cid-w5adyq6c": true })}` })}<script>(function(){${defineScriptVars({ apiUrl: "https://familias.vercel.app/api" })}
  // @ts-nocheck
  const API_URL = apiUrl;
  let isDeleting = false;

  function showDeleteConfirmModal(titulo) {
    return new Promise((resolve) => {
      const overlay = document.getElementById('deleteConfirmOverlay');
      const message = document.getElementById('deleteConfirmMessage');
      const btnConfirm = document.getElementById('deleteConfirmBtn');
      const btnCancel = document.getElementById('deleteCancelBtn');

      if (!overlay || !message || !btnConfirm || !btnCancel) {
        resolve(false);
        return;
      }

      let resolved = false;

      const cleanup = () => {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        btnConfirm.removeEventListener('click', onConfirm);
        btnCancel.removeEventListener('click', onCancel);
        overlay.removeEventListener('click', onOverlayClick);
        document.removeEventListener('keydown', onKeyDown);
      };

      const finalize = (value) => {
        if (resolved) return;
        resolved = true;
        cleanup();
        resolve(value);
      };

      const onConfirm = () => finalize(true);
      const onCancel = () => finalize(false);
      const onOverlayClick = (event) => {
        if (event.target === overlay) finalize(false);
      };
      const onKeyDown = (event) => {
        if (event.key === 'Escape') finalize(false);
      };

      message.textContent = \`¿Eliminar "\${titulo}"? Esta acción quitará el libro y sus datos asociados.\`;
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');

      btnConfirm.addEventListener('click', onConfirm);
      btnCancel.addEventListener('click', onCancel);
      overlay.addEventListener('click', onOverlayClick);
      document.addEventListener('keydown', onKeyDown);
    });
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderPublishedBooks(libros) {
    const grid = document.getElementById('published-grid');
    const empty = document.getElementById('published-empty');
    const count = document.getElementById('published-count');
    const stats = document.getElementById('published-stats');
    const statPublicaciones = document.getElementById('stat-publicaciones');
    const statDescargas = document.getElementById('stat-descargas');
    const statGuardados = document.getElementById('stat-guardados');

    if (!grid || !empty || !count || !stats || !statPublicaciones || !statDescargas || !statGuardados) return;

    const totalPublicaciones = libros.length;
    const totalDescargas = libros.reduce((acc, libro) => acc + Number(libro.descargas_total || 0), 0);
    const totalGuardados = libros.reduce((acc, libro) => acc + Number(libro.guardados_total || 0), 0);

    statPublicaciones.textContent = totalPublicaciones.toLocaleString('es');
    statDescargas.textContent = totalDescargas.toLocaleString('es');
    statGuardados.textContent = totalGuardados.toLocaleString('es');
    stats.style.display = 'grid';

    count.textContent = \`\${libros.length} \${libros.length === 1 ? 'publicación' : 'publicaciones'}\`;

    if (!libros.length) {
      grid.innerHTML = '';
      empty.style.display = 'block';
      return;
    }

    empty.style.display = 'none';

    grid.innerHTML = libros
      .map((libro) => {
        const portada = /^https?:\\/\\//i.test(libro.portada_icono || '')
          ? \`<img class="cover-image" src="\${escapeHtml(libro.portada_icono)}" alt="Portada de \${escapeHtml(libro.titulo)}" loading="lazy" />\`
          : \`<span class="cover-icon">\${escapeHtml(libro.portada_icono || '📖')}</span>\`;

        const estado = libro.publicado ? 'Publicado' : 'Borrador';

        return \`
          <article class="book-card">
            <button class="delete-book-btn js-delete-book" data-slug="\${encodeURIComponent(libro.slug || '')}" data-title="\${encodeURIComponent(String(libro.titulo || 'este libro'))}" type="button" aria-label="Eliminar \${escapeHtml(libro.titulo || 'libro')}">
              🗑
            </button>
            <a href="/libro/\${encodeURIComponent(libro.slug)}" class="book-card-link">
              <div class="book-cover" style="background: \${escapeHtml(libro.portada_gradiente || 'linear-gradient(135deg,#00a8e8,#b82db5)')}">
                \${portada}
                <div class="cover-title-overlay">
                  <p class="cover-titulo">\${escapeHtml(libro.titulo || 'Sin título')}</p>
                  <p class="cover-autor">\${escapeHtml(libro.autor_nombre || 'Autor')}</p>
                </div>
              </div>
              <div class="book-info">
                <p class="book-autor">\${escapeHtml(libro.autor_nombre || 'Autor')}</p>
                <h3 class="book-titulo">\${escapeHtml(libro.titulo || 'Sin título')}</h3>
                <div class="book-tags">
                  <span class="badge">\${estado}</span>
                </div>
                <div class="book-meta">
                  <div class="star-rating">⭐ \${Number(libro.rating_promedio || 0).toFixed(1)}</div>
                  <div class="book-descargas">⬇ \${Number(libro.descargas_total || 0).toLocaleString('es')}</div>
                  <div class="book-guardados">❤️ \${Number(libro.guardados_total || 0).toLocaleString('es')}</div>
                </div>
              </div>
            </a>
          </article>
        \`;
      })
      .join('');
  }

  async function deletePublishedBook(slug, titulo) {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/auth/login';
      return;
    }

    if (isDeleting) return;

    const confirmed = await showDeleteConfirmModal(titulo);
    if (!confirmed) return;

    isDeleting = true;

    try {
      const res = await fetch(\`\${API_URL}/libros/\${slug}/publicacion\`, {
        method: 'DELETE',
        headers: {
          Authorization: \`Bearer \${token}\`,
        },
      });

      if (res.status === 401) {
        window.location.href = '/auth/login';
        return;
      }

      if (res.status === 403) {
        window.alert('No tienes permisos para eliminar este libro.');
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'No se pudo eliminar la publicación.');
      }

      await loadPublishedBooks();
    } catch (error) {
      window.alert(error?.message || 'Error al eliminar la publicación.');
    } finally {
      isDeleting = false;
    }
  }

  function bindPublishedActions() {
    const grid = document.getElementById('published-grid');
    if (!grid || grid.dataset.bound === '1') return;

    grid.addEventListener('click', async (event) => {
      const button = event.target.closest('.js-delete-book');
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const slug = button.getAttribute('data-slug') || '';
      const rawTitle = button.getAttribute('data-title') || '';
      const title = rawTitle ? decodeURIComponent(rawTitle) : 'este libro';
      if (!slug) return;

      await deletePublishedBook(slug, title);
    });

    grid.dataset.bound = '1';
  }

  async function loadPublishedBooks() {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/auth/login';
      return;
    }

    try {
      const res = await fetch(\`\${API_URL}/usuarios/publicaciones\`, {
        headers: {
          Authorization: \`Bearer \${token}\`,
        },
      });

      if (res.status === 401) {
        window.location.href = '/auth/login';
        return;
      }

      if (!res.ok) throw new Error('No se pudieron cargar las publicaciones.');

      const data = await res.json();
      renderPublishedBooks(Array.isArray(data) ? data : []);
      bindPublishedActions();
    } catch (error) {
      const count = document.getElementById('published-count');
      if (count) count.textContent = 'Error al cargar publicaciones';
      renderPublishedBooks([]);
      bindPublishedActions();
    }
  }

  loadPublishedBooks();
})();<\/script>`;
}, "/Users/useit/Desktop/familias/front/src/pages/panel/publicaciones.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/panel/publicaciones.astro";
var $$url = "/panel/publicaciones";
//#endregion
//#region \0virtual:astro:page:src/pages/panel/publicaciones@_@astro
var page = () => publicaciones_exports;
//#endregion
export { page };
