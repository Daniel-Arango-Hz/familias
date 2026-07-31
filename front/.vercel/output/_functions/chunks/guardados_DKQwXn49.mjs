import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as defineScriptVars, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as $$Layout } from "./Layout_DkrXWXQE.mjs";
import { t as $$Header } from "./Header_Do5vNWZK.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Pqn_5hWI.mjs";
//#region src/pages/panel/guardados.astro
var guardados_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Guardados,
	file: () => $$file,
	url: () => $$url
});
var $$Guardados = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Mi Biblioteca – FamiliaLee",
		"description": "Libros guardados por el usuario.",
		"data-astro-cid-er5j7ncl": true
	}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-er5j7ncl": true })}${maybeRenderHead($$result2)}<main data-astro-cid-er5j7ncl><section class="panel-hero" data-astro-cid-er5j7ncl><div class="container panel-hero-inner" data-astro-cid-er5j7ncl><div class="panel-avatar" aria-hidden="true" data-astro-cid-er5j7ncl>📚</div><div data-astro-cid-er5j7ncl><h1 class="panel-nombre" data-astro-cid-er5j7ncl>Mi Biblioteca</h1><p class="panel-email" data-astro-cid-er5j7ncl>Tus libros guardados para leer después</p></div></div></section><section class="section" data-astro-cid-er5j7ncl><div class="container panel-layout" data-astro-cid-er5j7ncl><nav class="panel-nav" aria-label="Navegación del panel" data-astro-cid-er5j7ncl><ul class="panel-nav-list" data-astro-cid-er5j7ncl><li data-astro-cid-er5j7ncl><a href="/panel/guardados" class="panel-nav-link active" data-astro-cid-er5j7ncl>Guardados</a></li><li data-astro-cid-er5j7ncl><a href="/panel/publicaciones" class="panel-nav-link" data-astro-cid-er5j7ncl>Publicaciones</a></li></ul></nav><div class="panel-content" data-astro-cid-er5j7ncl><div class="section-header" data-astro-cid-er5j7ncl><h2 data-astro-cid-er5j7ncl>Libros Guardados</h2><p id="saved-count" data-astro-cid-er5j7ncl>Cargando...</p></div><div id="saved-grid" class="panel-books-grid" data-astro-cid-er5j7ncl></div><div id="saved-empty" class="empty-state" style="display: none;" data-astro-cid-er5j7ncl><p data-astro-cid-er5j7ncl>Aún no tienes libros guardados.</p><a href="/biblioteca" class="btn-link" data-astro-cid-er5j7ncl>Explorar biblioteca</a></div></div></div></section></main>${renderComponent($$result2, "CtaFooter", $$CtaFooter, { "data-astro-cid-er5j7ncl": true })}` })}<script>(function(){${defineScriptVars({ apiUrl: "https://familias.vercel.app/api" })}
  // @ts-nocheck
  const API_URL = apiUrl;

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderSavedBooks(libros) {
    const grid = document.getElementById('saved-grid');
    const empty = document.getElementById('saved-empty');
    const count = document.getElementById('saved-count');

    if (!grid || !empty || !count) return;

    count.textContent = \`\${libros.length} \${libros.length === 1 ? 'libro guardado' : 'libros guardados'}\`;

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

        return \`
          <article class="book-card">
            <a href="/libro/\${encodeURIComponent(libro.slug)}" class="book-card-link">
              <div class="book-cover" style="background: \${escapeHtml(libro.portada_gradiente || 'linear-gradient(135deg,#00a8e8,#b82db5)')}">
                \${portada}
                <div class="cover-title-overlay">
                  <p class="cover-titulo">\${escapeHtml(libro.titulo || 'Sin título')}</p>
                  <p class="cover-autor">\${escapeHtml(libro.autor_nombre || 'Anónimo')}</p>
                </div>
              </div>
              <div class="book-info">
                <p class="book-autor">\${escapeHtml(libro.autor_nombre || 'Anónimo')}</p>
                <h3 class="book-titulo">\${escapeHtml(libro.titulo || 'Sin título')}</h3>
                <div class="book-meta">
                  <div class="star-rating">⭐ \${Number(libro.rating_promedio || 0).toFixed(1)}</div>
                  <div class="book-descargas">⬇ \${Number(libro.descargas_total || 0).toLocaleString('es')}</div>
                </div>
              </div>
            </a>
          </article>
        \`;
      })
      .join('');
  }

  async function loadSavedBooks() {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/auth/login';
      return;
    }

    try {
      const res = await fetch(\`\${API_URL}/usuarios/guardados\`, {
        headers: {
          Authorization: \`Bearer \${token}\`,
        },
      });

      if (res.status === 401) {
        window.location.href = '/auth/login';
        return;
      }

      if (!res.ok) throw new Error('No se pudieron cargar los guardados.');

      const data = await res.json();
      renderSavedBooks(Array.isArray(data) ? data : []);
    } catch (error) {
      const count = document.getElementById('saved-count');
      if (count) count.textContent = 'Error al cargar guardados';
      renderSavedBooks([]);
    }
  }

  loadSavedBooks();
})();<\/script>`;
}, "/Users/useit/Desktop/familias/front/src/pages/panel/guardados.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/panel/guardados.astro";
var $$url = "/panel/guardados";
//#endregion
//#region \0virtual:astro:page:src/pages/panel/guardados@_@astro
var page = () => guardados_exports;
//#endregion
export { page };
