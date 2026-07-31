import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createAstro, _ as defineScriptVars, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as $$Layout } from "./Layout_DkrXWXQE.mjs";
//#region src/pages/libro/[slug]/leer.astro
var leer_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Leer,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	const API_URL = "https://familias.vercel.app/api";
	try {
		const res = await fetch(`${API_URL}/libros?limit=1000`);
		if (!res.ok) return [];
		const payload = await res.json();
		return (Array.isArray(payload) ? payload : payload.data || []).filter((libro) => libro?.slug).map((libro) => ({ params: { slug: libro.slug } }));
	} catch {
		return [];
	}
}
var $$Leer = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Leer;
	const { slug } = Astro2.params;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Leyendo... – FamiliaLee`,
		"description": `Lee en línea gratuitamente.`
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div id="loading-spinner" class="loading-spinner"><div class="spinner"></div><p>Cargando libro...</p></div><div id="error-container" class="error-container" style="display: none;"><p>No se pudo cargar el libro.</p><a href="/biblioteca">Volver a la biblioteca</a></div><div id="reader-container" style="display: none;"><!-- Barra de lectura --><div class="reader-bar"><div class="reader-bar-inner"><a${addAttribute(`/libro/${slug}`, "href")} class="reader-back" aria-label="Volver al libro"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"></path></svg><span>Volver</span></a><div class="reader-book-info"><div class="reader-cover-mini" aria-hidden="true">📖</div><div><p class="reader-titulo" id="reader-titulo">Cargando...</p><p class="reader-autor" id="reader-autor">...</p></div></div><div class="reader-bar-actions"><button class="reader-btn" id="btn-font-down" aria-label="Reducir tamaño de texto" title="Texto más pequeño">A−</button><button class="reader-btn" id="btn-font-up" aria-label="Aumentar tamaño de texto" title="Texto más grande">A+</button><button class="reader-btn" id="btn-theme" aria-label="Cambiar tema" title="Cambiar tema"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg></button><a id="btn-download" href="#" class="reader-btn reader-btn-dl" title="Ir al libro"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a></div></div><!-- Barra de progreso --><div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width: 0%"></div></div></div><main class="reader-main" id="reader-main"><!-- Índice lateral --><aside class="reader-toc" aria-label="Tabla de contenidos"><h2 class="toc-title">Contenido</h2><ol class="toc-list" id="toc-list"><li><button class="toc-link" disabled>Cargando...</button></li></ol></aside><!-- Área de lectura --><article class="reader-content" id="reader-content" aria-live="polite"><!-- Las páginas se cargan aquí con JavaScript --></article></main></div>` })}<script>(function(){${defineScriptVars({
		slug,
		apiUrl: "https://familias.vercel.app/api"
	})}
  const API_URL = apiUrl;
  let libro = null;
  let paginas = [];
  let currentPage = 1;
  let readerControlsInitialized = false;
  let pdfjsLibPromise = null;
  const pdfState = {
    doc: null,
    page: 1,
    total: 0,
    rendering: false,
    pendingPage: null,
    scale: 1.25,
  };

  async function loadBook() {
    try {
      const res = await fetch(\`\${API_URL}/libros/\${slug}\`);
      if (!res.ok) throw new Error('Libro no encontrado');
      
      libro = await res.json();

      if (libro?.contenido_url) {
        await renderPdfBook();
        setupEventListeners();
        showReader();
        return;
      }

      paginas = Array.isArray(libro.paginas) ? libro.paginas : [];
      
      if (paginas.length === 0) {
        showError();
        return;
      }
      
      renderBook();
      setupEventListeners();
      showReader();
    } catch (error) {
      console.error('Error cargando libro:', error);
      showError();
    }
  }

  async function renderPdfBook() {
    document.getElementById('reader-titulo').textContent = libro.titulo || 'Libro';
    document.getElementById('reader-autor').textContent = libro.autor_nombre || 'Autor';
    document.getElementById('btn-download').href = libro.contenido_url;
    document.getElementById('btn-download').target = '_blank';
    document.getElementById('btn-download').rel = 'noopener noreferrer';

    const isPdf = /\\.pdf(\\?|$)/i.test(libro.contenido_url);
    const isWord = /\\.(doc|docx)(\\?|$)/i.test(libro.contenido_url);
    const contentArea = document.getElementById('reader-content');
    if (isPdf) {
      await renderPdfPaginated(contentArea);
      return;
    }

    if (isWord) {
      renderWordOnline(contentArea);
      return;
    }

    const tocList = document.getElementById('toc-list');
    tocList.innerHTML = '<li><button class="toc-link" disabled>Vista previa no disponible</button></li>';

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = '100%';

    contentArea.innerHTML = \`
      <div class="doc-preview-unavailable">
        <h2>Vista previa no disponible</h2>
        <p>Este formato todavía no se puede mostrar en el lector integrado. Puedes abrirlo en una nueva pestaña.</p>
        <a href="\${libro.contenido_url}" target="_blank" rel="noopener noreferrer" class="doc-open-btn">Abrir archivo</a>
      </div>
    \`;
  }

  function renderWordOnline(contentArea) {
    const tocList = document.getElementById('toc-list');
    tocList.innerHTML = '<li><button class="toc-link active" disabled>Documento Word</button></li>';

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = '100%';

    const officeViewerUrl = \`https://view.officeapps.live.com/op/embed.aspx?src=\${encodeURIComponent(libro.contenido_url)}\`;

    contentArea.innerHTML = \`
      <section class="doc-viewer-shell">
        <div class="doc-viewer-wrap">
          <iframe
            class="doc-viewer"
            src="\${officeViewerUrl}"
            title="Vista en línea del documento"
            loading="lazy"
            referrerpolicy="no-referrer"
            allowfullscreen
          ></iframe>
        </div>

        <div class="doc-viewer-fallback">
          <p>Si no se carga la vista previa, abre el archivo directamente:</p>
          <div class="doc-viewer-actions">
            <a href="\${libro.contenido_url}" target="_blank" rel="noopener noreferrer" class="doc-open-btn">Abrir archivo</a>
            <a href="\${libro.contenido_url}" download class="doc-open-btn doc-open-btn-secondary">Descargar</a>
          </div>
        </div>
      </section>
    \`;
  }

  async function loadPdfJs() {
    if (pdfjsLibPromise) return pdfjsLibPromise;

    pdfjsLibPromise = import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.mjs')
      .then((pdfjs) => {
        pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.worker.mjs';
        return pdfjs;
      });

    return pdfjsLibPromise;
  }

  async function renderPdfPaginated(contentArea) {
    const tocList = document.getElementById('toc-list');
    tocList.innerHTML = '<li><button class="toc-link" disabled>Cargando PDF...</button></li>';

    contentArea.innerHTML = \`
      <section class="pdf-reader-shell">
        <div class="pdf-canvas-wrap">
          <canvas id="pdf-canvas" class="pdf-canvas" aria-label="Vista de página PDF"></canvas>
        </div>
        <footer class="page-footer pdf-footer">
          <div class="page-nav pdf-nav">
            <button id="pdf-prev" class="page-nav-btn" type="button">Anterior</button>
            <span id="pdf-page-indicator" class="pdf-page-indicator">Página 1 de 1</span>
            <button id="pdf-next" class="page-nav-btn page-nav-next" type="button">Siguiente</button>
          </div>
        </footer>
      </section>
    \`;

    try {
      const pdfjs = await loadPdfJs();
      const task = pdfjs.getDocument(libro.contenido_url);
      const pdfDoc = await task.promise;

      pdfState.doc = pdfDoc;
      pdfState.page = 1;
      pdfState.total = pdfDoc.numPages || 1;

      tocList.innerHTML = \`
        <li><button class="toc-link active" disabled>PDF · \${pdfState.total} páginas</button></li>
      \`;

      await renderPdfPage(pdfState.page);

      document.getElementById('pdf-prev')?.addEventListener('click', () => {
        if (pdfState.page <= 1) return;
        queuePdfPage(pdfState.page - 1);
      });

      document.getElementById('pdf-next')?.addEventListener('click', () => {
        if (pdfState.page >= pdfState.total) return;
        queuePdfPage(pdfState.page + 1);
      });
    } catch (error) {
      console.error('No se pudo renderizar el PDF paginado:', error);
      contentArea.innerHTML = \`
        <div class="doc-preview-unavailable">
          <h2>No se pudo abrir el PDF aquí</h2>
          <p>Puedes abrir el archivo en una nueva pestaña para leerlo.</p>
          <a href="\${libro.contenido_url}" target="_blank" rel="noopener noreferrer" class="doc-open-btn">Abrir PDF</a>
        </div>
      \`;
      const fill = document.getElementById('progress-fill');
      if (fill) fill.style.width = '100%';
      tocList.innerHTML = '<li><button class="toc-link" disabled>PDF externo</button></li>';
    }
  }

  function queuePdfPage(pageNumber) {
    if (!pdfState.doc) return;
    const safePage = Math.min(Math.max(1, pageNumber), pdfState.total);

    if (pdfState.rendering) {
      pdfState.pendingPage = safePage;
      return;
    }

    renderPdfPage(safePage);
  }

  async function renderPdfPage(pageNumber) {
    if (!pdfState.doc) return;

    pdfState.rendering = true;
    pdfState.page = pageNumber;

    const page = await pdfState.doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: pdfState.scale });

    const canvas = document.getElementById('pdf-canvas');
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      pdfState.rendering = false;
      return;
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport }).promise;

    updatePdfUi();
    pdfState.rendering = false;

    if (pdfState.pendingPage !== null) {
      const nextPage = pdfState.pendingPage;
      pdfState.pendingPage = null;
      queuePdfPage(nextPage);
    }
  }

  function updatePdfUi() {
    const indicator = document.getElementById('pdf-page-indicator');
    if (indicator) indicator.textContent = \`Página \${pdfState.page} de \${pdfState.total}\`;

    const prevBtn = document.getElementById('pdf-prev');
    const nextBtn = document.getElementById('pdf-next');
    if (prevBtn) prevBtn.disabled = pdfState.page <= 1;
    if (nextBtn) nextBtn.disabled = pdfState.page >= pdfState.total;

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = \`\${(pdfState.page / pdfState.total) * 100}%\`;
  }

  function renderBook() {
    document.getElementById('reader-titulo').textContent = libro.titulo;
    document.getElementById('reader-autor').textContent = libro.autor_nombre;
    document.getElementById('btn-download').href = \`/libro/\${slug}\`;

    const tocList = document.getElementById('toc-list');
    tocList.innerHTML = paginas
      .map((pag) => {
        const pageId = pag.titulo || \`pagina-\${pag.numero}\`;
        return \`
        <li>
          <button class="toc-link" data-goto="\${pageId}" data-page="\${pageId}">
            <span class="toc-num">\${pag.numero}</span>
            <span class="toc-name">\${pageId}</span>
          </button>
        </li>
      \`;
      })
      .join('');

    const contentArea = document.getElementById('reader-content');
    contentArea.innerHTML = paginas
      .map((pag, idx) => {
        const pageId = pag.titulo || \`pagina-\${pag.numero}\`;
        const prevPageId = idx > 0 ? (paginas[idx - 1].titulo || \`pagina-\${paginas[idx - 1].numero}\`) : null;
        const nextPageId = idx < paginas.length - 1 ? (paginas[idx + 1].titulo || \`pagina-\${paginas[idx + 1].numero}\`) : null;
        
        return \`
        <div class="page-section \${idx === 0 ? 'active' : ''}" data-page="\${pageId}" aria-hidden="\${idx !== 0}">
          <header class="page-header">
            <span class="page-label">Página \${pag.numero} de \${paginas.length}</span>
            \${pag.titulo ? \`<h1 class="page-titulo">\${pag.titulo}</h1>\` : ''}
          </header>

          <div class="page-body">
            \${pag.contenido
              .split('\\n\\n')
              .map((parrafo) => {
                if (parrafo.startsWith('**') && parrafo.endsWith('**')) {
                  return \`<h3 class="parrafo-titulo">\${parrafo.replace(/\\*\\*/g, '')}</h3>\`;
                }
                const formatted = parrafo.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
                if (parrafo.startsWith('"') && parrafo.includes('" —')) {
                  return \`<blockquote class="page-quote">\${formatted}</blockquote>\`;
                }
                return \`<p class="page-parrafo">\${formatted}</p>\`;
              })
              .join('')}
          </div>

          <footer class="page-footer">
            <div class="page-nav">
              \${prevPageId ? \`<button class="page-nav-btn" data-goto="\${prevPageId}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg> Anterior</button>\` : ''}
              <span class="page-dots">
                \${paginas.map((p, i) => {
                  const pId = p.titulo || \`pagina-\${p.numero}\`;
                  return \`<button class="dot-btn \${pId === pageId ? 'active' : ''}" data-goto="\${pId}"></button>\`;
                }).join('')}
              </span>
              \${nextPageId ? \`<button class="page-nav-btn page-nav-next" data-goto="\${nextPageId}">Siguiente <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>\` : \`<a href="/libro/\${slug}" class="page-nav-btn page-nav-next">Finalizar <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>\`}
            </div>
          </footer>
        </div>
      \`;
      })
      .join('');
  }

  function setupEventListeners() {
    if (readerControlsInitialized) return;
    readerControlsInitialized = true;

    // Navegación por botones
    document.addEventListener('click', (e) => {
      const target = e.target;
      const btn = target?.closest?.('[data-goto]');
      if (btn?.dataset?.goto) goToPage(btn.dataset.goto);
    });

    // Tamaño de fuente
    let fontSize = 17;
    const main = document.getElementById('reader-main');
    document.getElementById('btn-font-up')?.addEventListener('click', () => {
      fontSize = Math.min(fontSize + 1, 24);
      main.style.setProperty('--reader-font-size', \`\${fontSize}px\`);
    });
    document.getElementById('btn-font-down')?.addEventListener('click', () => {
      fontSize = Math.max(fontSize - 1, 13);
      main.style.setProperty('--reader-font-size', \`\${fontSize}px\`);
    });

    // Tema
    let themeIdx = 0;
    const themes = ['', 'sepia', 'dark'];
    document.getElementById('btn-theme')?.addEventListener('click', () => {
      themeIdx = (themeIdx + 1) % themes.length;
      document.body.dataset.readerTheme = themes[themeIdx];
    });

    // Leer página desde URL
    const params = new URLSearchParams(window.location.search);
    const initPageTitle = params.get('pagina');
    if (initPageTitle) goToPage(initPageTitle);
  }

  window.goToPage = goToPage;

  function goToPage(pageId) {
    currentPage = pageId;
    document.querySelectorAll('.page-section').forEach((el) => {
      const active = el.dataset.page === String(pageId);
      el.classList.toggle('active', active);
      el.setAttribute('aria-hidden', String(!active));
    });
    document.querySelectorAll('.toc-link').forEach((el) => {
      el.classList.toggle('active', el.dataset.page === String(pageId));
    });
    document.querySelectorAll('.dot-btn').forEach((el) => {
      el.classList.toggle('active', el.dataset.goto === String(pageId));
    });
    
    // Calcular índice de página para la barra de progreso
    const pageIndex = Array.from(document.querySelectorAll('.page-section')).findIndex(el => el.dataset.page === String(pageId));
    const fill = document.getElementById('progress-fill');
    if (fill && pageIndex >= 0) fill.style.width = \`\${((pageIndex + 1) / paginas.length) * 100}%\`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showReader() {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('reader-container').style.display = 'block';
  }

  function showError() {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('error-container').style.display = 'block';
  }

  loadBook();
})();<\/script>`;
}, "/Users/useit/Desktop/familias/front/src/pages/libro/[slug]/leer.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/libro/[slug]/leer.astro";
var $$url = "/libro/[slug]/leer";
//#endregion
//#region \0virtual:astro:page:src/pages/libro/[slug]/leer@_@astro
var page = () => leer_exports;
//#endregion
export { page };
