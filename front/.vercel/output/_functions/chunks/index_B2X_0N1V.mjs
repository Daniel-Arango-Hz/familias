import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as defineScriptVars, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as renderScript } from "./script_d5et9MFD.mjs";
import { t as $$Layout } from "./Layout_DkrXWXQE.mjs";
import { t as $$Header } from "./Header_Do5vNWZK.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Pqn_5hWI.mjs";
import { n as obtenerLibros, t as obtenerAutores } from "./api_D4c-A64j.mjs";
import { t as $$BookCard } from "./BookCard_yWMwnT1h.mjs";
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" data-astro-cid-ge2uvauf><div class="container hero-inner" data-astro-cid-ge2uvauf><div class="hero-badge" data-astro-cid-ge2uvauf><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-ge2uvauf><rect x="3" y="4" width="13" height="16" rx="2" stroke="#c8872a" stroke-width="2" data-astro-cid-ge2uvauf></rect><path d="M7 8h5M7 12h5M7 16h3" stroke="#c8872a" stroke-width="1.5" stroke-linecap="round" data-astro-cid-ge2uvauf></path></svg>Biblioteca Digital para Familias</div><h1 class="hero-title" data-astro-cid-ge2uvauf>Recursos que<br data-astro-cid-ge2uvauf><span class="hero-title-highlight" data-astro-cid-ge2uvauf>nutren</span> la unión de las familiar</h1><p class="hero-desc" data-astro-cid-ge2uvauf>Libros, cuentos, guías y recursos educativos creados por autores y familias para fortalecer el hogar.</p><form class="hero-search" action="/buscar" method="get" role="search" data-astro-cid-ge2uvauf><label for="hero-search-input" class="sr-only" data-astro-cid-ge2uvauf>Buscar contenido</label><svg class="hero-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-ge2uvauf><circle cx="11" cy="11" r="8" data-astro-cid-ge2uvauf></circle><path d="m21 21-4.35-4.35" data-astro-cid-ge2uvauf></path></svg><input id="hero-search-input" type="search" name="q" class="hero-search-input" placeholder="Buscar libros, autores, categorías..." autocomplete="off" data-astro-cid-ge2uvauf><button type="submit" class="hero-search-btn" data-astro-cid-ge2uvauf>Buscar</button></form><div class="hero-actions" data-astro-cid-ge2uvauf><a href="#biblioteca" class="btn-gold" data-astro-cid-ge2uvauf><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-ge2uvauf><rect x="3" y="4" width="13" height="16" rx="2" stroke="currentColor" stroke-width="2" data-astro-cid-ge2uvauf></rect><path d="M7 8h5M7 12h5M7 16h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-ge2uvauf></path></svg>Explorar biblioteca</a><a href="/subir-libro" class="btn-ghost js-require-login-upload" data-astro-cid-ge2uvauf>Publicar contenido<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-ge2uvauf><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-ge2uvauf></path></svg></a></div><div class="hero-stats" data-astro-cid-ge2uvauf><div class="hero-stat" data-astro-cid-ge2uvauf><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-ge2uvauf><rect x="3" y="4" width="13" height="16" rx="2" data-astro-cid-ge2uvauf></rect><path d="M7 8h5M7 12h5M7 16h3" stroke-linecap="round" data-astro-cid-ge2uvauf></path></svg><div data-astro-cid-ge2uvauf><strong data-astro-cid-ge2uvauf>200+</strong><span data-astro-cid-ge2uvauf>Libros disponibles</span></div></div><div class="hero-stat" data-astro-cid-ge2uvauf><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-ge2uvauf><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-ge2uvauf></path><circle cx="9" cy="7" r="4" data-astro-cid-ge2uvauf></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-ge2uvauf></path></svg><div data-astro-cid-ge2uvauf><strong data-astro-cid-ge2uvauf>50+</strong><span data-astro-cid-ge2uvauf>Autores activos</span></div></div><div class="hero-stat" data-astro-cid-ge2uvauf><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-ge2uvauf><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-ge2uvauf></path><polyline points="7 10 12 15 17 10" data-astro-cid-ge2uvauf></polyline><line x1="12" y1="15" x2="12" y2="3" data-astro-cid-ge2uvauf></line></svg><div data-astro-cid-ge2uvauf><strong data-astro-cid-ge2uvauf>12.000+</strong><span data-astro-cid-ge2uvauf>Descargas totales</span></div></div></div></div></section>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/LibrosDestacados.astro
var $$LibrosDestacados = createComponent(async ($$result, $$props, $$slots) => {
	let librosDestacados = [];
	try {
		librosDestacados = (await obtenerLibros({
			orden: "destacado",
			limite: 4
		})).data || [];
	} catch (error) {
		console.error("Error al obtener libros destacados:", error);
	}
	return renderTemplate`${librosDestacados.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="section section-bg" id="biblioteca" data-astro-cid-6gh6k7dg><div class="container" data-astro-cid-6gh6k7dg><div class="section-header section-header-row" data-astro-cid-6gh6k7dg><div class="section-header" data-astro-cid-6gh6k7dg><h2 data-astro-cid-6gh6k7dg>Libros Destacados</h2><p data-astro-cid-6gh6k7dg>Seleccionados por nuestra comunidad para toda la familia</p></div><a href="/biblioteca" class="ver-mas" data-astro-cid-6gh6k7dg>Ver biblioteca completa →</a></div><div class="books-grid" data-astro-cid-6gh6k7dg>${librosDestacados.map((libro) => {
		return renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, {
			"libro": {
				slug: libro.slug,
				titulo: libro.titulo,
				autor: libro.autor_nombre || "Anónimo",
				descripcion: libro.descripcion,
				portadaGradiente: libro.portada_gradiente || "from-blue-500 to-indigo-600",
				portadaIcono: libro.portada_icono || "📖",
				categorias: libro.categorias || [],
				rating: libro.rating_promedio || 0,
				votos: libro.total_valoraciones || 0,
				descargas: libro.descargas_total || 0,
				edadRango: libro.edad_rango || "5-12",
				autorSlug: libro.autor_slug || "",
				paginas: Number(libro.paginas_total || 0),
				anio: Number(libro.anio_publicacion || (/* @__PURE__ */ new Date()).getFullYear()),
				paginasContenido: Array.isArray(libro.paginas_contenido) ? libro.paginas_contenido : [],
				destacado: libro.destacado || false,
				nuevo: libro.nuevo || false
			},
			"data-astro-cid-6gh6k7dg": true
		})}`;
	})}</div></div></section>`}`;
}, "/Users/useit/Desktop/familias/front/src/components/LibrosDestacados.astro", void 0);
//#endregion
//#region src/components/NuevasPublicaciones.astro
var $$NuevasPublicaciones = createComponent(async ($$result, $$props, $$slots) => {
	let nuevos = [];
	try {
		nuevos = (await obtenerLibros({
			orden: "nuevo",
			limite: 4
		})).data || [];
	} catch (error) {
		console.error("Error al obtener nuevas publicaciones:", error);
	}
	return renderTemplate`${nuevos.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="section" id="nuevas" data-astro-cid-yaabryqi><div class="container" data-astro-cid-yaabryqi><div class="section-header section-header-row" data-astro-cid-yaabryqi><div class="section-header" data-astro-cid-yaabryqi><h2 data-astro-cid-yaabryqi>Nuevas Publicaciones</h2><p data-astro-cid-yaabryqi>Los últimos recursos añadidos por nuestra comunidad</p></div><a href="/biblioteca?orden=nuevo" class="ver-mas" data-astro-cid-yaabryqi>Ver todos los nuevos →</a></div><div class="pub-grid" data-astro-cid-yaabryqi>${nuevos.map((pub) => {
		return renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, {
			"libro": {
				slug: pub.slug,
				titulo: pub.titulo,
				autor: pub.autor_nombre || "Anónimo",
				descripcion: pub.descripcion,
				portadaGradiente: pub.portada_gradiente || "from-blue-500 to-indigo-600",
				portadaIcono: pub.portada_icono || "📖",
				categorias: pub.categorias || [],
				rating: pub.rating_promedio || 0,
				votos: pub.total_valoraciones || 0,
				descargas: pub.descargas_total || 0,
				edadRango: pub.edad_rango || "5-12",
				autorSlug: pub.autor_slug || "",
				paginas: Number(pub.paginas_total || 0),
				anio: Number(pub.anio_publicacion || (/* @__PURE__ */ new Date()).getFullYear()),
				paginasContenido: Array.isArray(pub.paginas_contenido) ? pub.paginas_contenido : [],
				destacado: pub.destacado || false,
				nuevo: pub.nuevo || false
			},
			"variante": "horizontal",
			"data-astro-cid-yaabryqi": true
		})}`;
	})}</div></div></section>`}`;
}, "/Users/useit/Desktop/familias/front/src/components/NuevasPublicaciones.astro", void 0);
//#endregion
//#region src/components/AutoresDestacados.astro
var $$AutoresDestacados = createComponent(async ($$result, $$props, $$slots) => {
	let autores = [];
	try {
		const respuesta = await obtenerAutores();
		autores = (Array.isArray(respuesta) ? respuesta : respuesta.data || []).slice(0, 4);
	} catch (error) {
		console.error("Error al obtener autores:", error);
	}
	const autoresFormateados = autores.map((autor) => ({
		nombre: autor.nombre || "Anónimo",
		bio: autor.especialidad || "Autor destacado",
		libros: autor.total_libros || 0,
		descargas: autor.total_descargas || 0,
		seguidores: autor.total_seguidores || 0,
		slug: autor.slug || ""
	}));
	return renderTemplate`${autoresFormateados.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="section section-bg" id="autores" data-astro-cid-oridzgr6><div class="container" data-astro-cid-oridzgr6><div class="section-header section-header-row" data-astro-cid-oridzgr6><div class="section-header" data-astro-cid-oridzgr6><h2 data-astro-cid-oridzgr6>Autores Destacados</h2><p data-astro-cid-oridzgr6>Conoce a quienes crean contenido para bendecir tu hogar</p></div><a href="/autores" class="ver-mas" data-astro-cid-oridzgr6>Ver todo →</a></div><div class="autores-grid" data-astro-cid-oridzgr6>${autoresFormateados.map((autor) => renderTemplate`<article class="autor-card" data-astro-cid-oridzgr6><a${addAttribute(`/autor/${autor.slug}`, "href")} class="autor-card-link"${addAttribute(`Ver perfil de ${autor.nombre}`, "aria-label")} data-astro-cid-oridzgr6><div class="autor-avatar" aria-hidden="true" data-astro-cid-oridzgr6><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9aabb8" stroke-width="1.5" aria-hidden="true" data-astro-cid-oridzgr6><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-oridzgr6></path><circle cx="12" cy="7" r="4" data-astro-cid-oridzgr6></circle></svg></div><h3 class="autor-nombre" data-astro-cid-oridzgr6>${autor.nombre}</h3><p class="autor-bio" data-astro-cid-oridzgr6>${autor.bio}</p><hr class="autor-divider" data-astro-cid-oridzgr6><div class="autor-stats" data-astro-cid-oridzgr6><div class="autor-stat" data-astro-cid-oridzgr6><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-oridzgr6><rect x="3" y="4" width="13" height="16" rx="2" data-astro-cid-oridzgr6></rect><path d="M7 8h5M7 12h5M7 16h3" stroke-linecap="round" data-astro-cid-oridzgr6></path></svg><strong data-astro-cid-oridzgr6>${autor.libros}</strong><span data-astro-cid-oridzgr6>Libros</span></div><div class="autor-stat" data-astro-cid-oridzgr6><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-oridzgr6><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-oridzgr6></path><polyline points="7 10 12 15 17 10" data-astro-cid-oridzgr6></polyline><line x1="12" y1="15" x2="12" y2="3" data-astro-cid-oridzgr6></line></svg><strong data-astro-cid-oridzgr6>${autor.descargas.toLocaleString("es")}</strong><span data-astro-cid-oridzgr6>Descargas</span></div><div class="autor-stat" data-astro-cid-oridzgr6><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-oridzgr6><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-oridzgr6></path><circle cx="9" cy="7" r="4" data-astro-cid-oridzgr6></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-oridzgr6></path></svg><strong data-astro-cid-oridzgr6>${autor.seguidores}</strong><span data-astro-cid-oridzgr6>Seguidores</span></div></div></a></article>`)}</div></div></section>`}`;
}, "/Users/useit/Desktop/familias/front/src/components/AutoresDestacados.astro", void 0);
//#endregion
//#region src/components/VideosRecientes.astro
var $$VideosRecientes = createComponent(async ($$result, $$props, $$slots) => {
	const API_URL = "https://familias.vercel.app/api";
	let videos = [];
	try {
		const res = await fetch(`${API_URL}/videos?limit=3`);
		if (res.ok) {
			const payload = await res.json();
			videos = (Array.isArray(payload) ? payload : payload.data || []).map((video) => ({
				titulo: video.titulo,
				autor: video.autor_nombre || "Anónimo",
				duracion: video.duracion || "00:00",
				vistas: Number(video.vistas || 0),
				slug: video.slug,
				gradiente: video.gradiente || "linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)",
				emoji: video.emoji || "🎬",
				url: video.url || ""
			}));
		}
	} catch (error) {
		console.error("Error al obtener videos recientes:", error);
	}
	return renderTemplate`${maybeRenderHead($$result)}<section class="section" id="videos"${addAttribute(API_URL, "data-api")} data-astro-cid-qwnvhd4v><div class="container" data-astro-cid-qwnvhd4v><div class="section-header section-header-row" data-astro-cid-qwnvhd4v><div class="section-header" data-astro-cid-qwnvhd4v><h2 data-astro-cid-qwnvhd4v>Videos Recientes</h2><p data-astro-cid-qwnvhd4v>Recursos audiovisuales para la devoción familiar</p></div><div class="section-actions" data-astro-cid-qwnvhd4v><a href="/galeria" class="ver-mas" data-astro-cid-qwnvhd4v>Ver galería →</a><div class="upload-actions" aria-label="Acciones para publicar en comunidad" data-astro-cid-qwnvhd4v><button type="button" class="upload-btn js-open-upload" data-upload-type="video" data-astro-cid-qwnvhd4v>Subir video</button><button type="button" class="upload-btn js-open-upload" data-upload-type="foto" data-astro-cid-qwnvhd4v>Subir foto</button><button type="button" class="upload-btn js-open-upload" data-upload-type="comentario" data-astro-cid-qwnvhd4v>Compartir comentario</button></div></div></div>${videos.length > 0 ? renderTemplate`<div class="videos-grid" id="videosGrid" data-astro-cid-qwnvhd4v>${videos.map((video) => renderTemplate`<article class="video-card" data-astro-cid-qwnvhd4v><button type="button" class="video-card-link"${addAttribute(`Reproducir: ${video.titulo}`, "aria-label")}${addAttribute(video.url, "data-video-url")}${addAttribute(video.titulo, "data-video-titulo")}${addAttribute(video.autor, "data-video-autor")}${addAttribute(video.slug, "data-video-slug")} data-astro-cid-qwnvhd4v><div class="video-thumb"${addAttribute(`background: ${video.gradiente}`, "style")} aria-hidden="true" data-astro-cid-qwnvhd4v><span class="video-emoji" data-astro-cid-qwnvhd4v>${video.emoji}</span><span class="video-duration" data-astro-cid-qwnvhd4v>${video.duracion}</span><div class="video-play" data-astro-cid-qwnvhd4v><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-qwnvhd4v><polygon points="5 3 19 12 5 21 5 3" data-astro-cid-qwnvhd4v></polygon></svg></div></div><div class="video-info" data-astro-cid-qwnvhd4v><h3 class="video-titulo" data-astro-cid-qwnvhd4v>${video.titulo}</h3><div class="video-meta" data-astro-cid-qwnvhd4v><span class="video-autor" data-astro-cid-qwnvhd4v>${video.autor}</span><div class="video-vistas" data-astro-cid-qwnvhd4v><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-qwnvhd4v><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-astro-cid-qwnvhd4v></path><circle cx="12" cy="12" r="3" data-astro-cid-qwnvhd4v></circle></svg>${Number(video.vistas || 0).toLocaleString("es")} vistas</div></div></div></button></article>`)}</div>` : renderTemplate`<div class="empty-videos" id="videosEmpty" data-astro-cid-qwnvhd4v><p data-astro-cid-qwnvhd4v>Aún no hay videos publicados.</p></div>`}</div></section>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/components/VideosRecientes.astro?astro&type=script&index=0&lang.ts")}<!-- Modal de reproducción de video --><div id="videoPlayerModal" style="display:none;" class="vplayer-overlay" aria-hidden="true" data-astro-cid-qwnvhd4v><div class="vplayer-backdrop" id="vplayerBackdrop" data-astro-cid-qwnvhd4v></div><div class="vplayer-card" role="dialog" aria-modal="true" aria-label="Reproductor de video" data-astro-cid-qwnvhd4v><div class="vplayer-header" data-astro-cid-qwnvhd4v><div data-astro-cid-qwnvhd4v><p class="vplayer-titulo" id="vplayerTitulo" data-astro-cid-qwnvhd4v></p><p class="vplayer-autor" id="vplayerAutor" data-astro-cid-qwnvhd4v></p></div><button type="button" class="vplayer-close" id="vplayerClose" aria-label="Cerrar" data-astro-cid-qwnvhd4v>×</button></div><video id="vplayerVideo" class="vplayer-video" controls playsinline preload="metadata" data-astro-cid-qwnvhd4v>Tu navegador no soporta la reproducción de video.</video></div></div>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/components/VideosRecientes.astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/components/VideosRecientes.astro", void 0);
//#endregion
//#region src/components/FamiliasParticipantes.astro
var $$FamiliasParticipantes = createComponent(async ($$result, $$props, $$slots) => {
	const API_URL = "https://familias.vercel.app/api";
	function formatFecha(raw) {
		if (!raw) return "Sin fecha";
		const d = new Date(raw);
		if (Number.isNaN(d.getTime())) return "Sin fecha";
		return d.toLocaleDateString("es-ES", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	}
	let participantes = [];
	try {
		const res = await fetch(`${API_URL}/galeria?limit=3`);
		if (res.ok) {
			const payload = await res.json();
			participantes = (Array.isArray(payload) ? payload : payload.data || []).map((item) => ({
				id: item.id,
				familia: item.nombre_familia || item.usuario_nombre || "Familia participante",
				fecha: formatFecha(item.created_at),
				texto: typeof item.texto === "string" ? item.texto.trim() : "",
				tipo: item.tipo === "foto" ? "Foto" : "Testimonio",
				likes: Number(item.total_likes || 0),
				imagen: item.tipo === "foto" && !!item.imagen_url,
				imagenUrl: item.imagen_url || ""
			}));
		}
	} catch (error) {
		console.error("Error al obtener familias participantes:", error);
	}
	return renderTemplate`${maybeRenderHead($$result)}<section class="section section-bg" id="galeria"${addAttribute(API_URL, "data-api")} data-astro-cid-wgx3wbse><div class="container" data-astro-cid-wgx3wbse><div class="section-header section-header-row" data-astro-cid-wgx3wbse><div class="section-header" data-astro-cid-wgx3wbse><h2 data-astro-cid-wgx3wbse>Familias Participantes</h2><p data-astro-cid-wgx3wbse>Testimonios y momentos compartidos por nuestra comunidad</p></div><div class="section-actions" data-astro-cid-wgx3wbse><a href="/galeria" class="ver-mas" data-astro-cid-wgx3wbse>Ver galería familiar →</a><div class="upload-actions" aria-label="Acciones para compartir en familia" data-astro-cid-wgx3wbse><button type="button" class="upload-btn js-open-upload" data-upload-type="foto" data-astro-cid-wgx3wbse>Subir foto</button><button type="button" class="upload-btn js-open-upload" data-upload-type="video" data-astro-cid-wgx3wbse>Subir video</button><button type="button" class="upload-btn js-open-upload" data-upload-type="comentario" data-astro-cid-wgx3wbse>Compartir comentario</button></div></div></div>${participantes.length > 0 ? renderTemplate`<div class="familias-grid" id="familiasGrid" data-astro-cid-wgx3wbse>${participantes.map((item) => renderTemplate`<article class="familia-card" data-astro-cid-wgx3wbse><div class="familia-header" data-astro-cid-wgx3wbse><div class="familia-avatar" aria-hidden="true" data-astro-cid-wgx3wbse><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aabb8" stroke-width="1.5" aria-hidden="true" data-astro-cid-wgx3wbse><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-wgx3wbse></path><circle cx="12" cy="7" r="4" data-astro-cid-wgx3wbse></circle></svg></div><div data-astro-cid-wgx3wbse><p class="familia-nombre" data-astro-cid-wgx3wbse>${item.familia}</p><time class="familia-fecha" datetime="2024-11-12" data-astro-cid-wgx3wbse>${item.fecha}</time></div></div>${item.imagen && renderTemplate`<img class="familia-img"${addAttribute(item.imagenUrl, "src")}${addAttribute(`Foto de ${item.familia}`, "alt")} loading="lazy" data-astro-cid-wgx3wbse>`}${item.texto && renderTemplate`<p class="familia-texto" data-astro-cid-wgx3wbse>${item.texto}</p>`}<hr class="familia-divider" data-astro-cid-wgx3wbse><div class="familia-footer" data-astro-cid-wgx3wbse><button class="familia-like js-like-btn"${addAttribute(item.id, "data-id")} data-liked="false"${addAttribute(`${item.likes} me gusta`, "aria-label")} data-astro-cid-wgx3wbse><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-wgx3wbse><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-astro-cid-wgx3wbse></path></svg><span class="like-count" data-astro-cid-wgx3wbse>${item.likes}</span></button><span class="familia-tipo" data-astro-cid-wgx3wbse>${item.tipo}</span></div></article>`)}</div>` : renderTemplate`<div class="empty-familias" id="familiasEmpty" data-astro-cid-wgx3wbse><p data-astro-cid-wgx3wbse>Aún no hay testimonios publicados.</p></div>`}</div></section>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/components/FamiliasParticipantes.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/components/FamiliasParticipantes.astro", void 0);
//#endregion
//#region src/components/CommunityUploadModal.astro
var $$CommunityUploadModal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div id="communityUploadModal" class="upload-modal" hidden aria-hidden="true" data-astro-cid-xqxsfxgt><div class="upload-modal-backdrop" data-close-upload-modal data-astro-cid-xqxsfxgt></div><div class="upload-modal-card" role="dialog" aria-modal="true" aria-labelledby="uploadModalTitle" data-astro-cid-xqxsfxgt><button type="button" class="upload-modal-close" data-close-upload-modal aria-label="Cerrar" data-astro-cid-xqxsfxgt>×</button><h3 id="uploadModalTitle" class="upload-modal-title" data-astro-cid-xqxsfxgt>Compartir con la comunidad</h3><p class="upload-modal-subtitle" id="uploadModalSubtitle" data-astro-cid-xqxsfxgt>Elige qué deseas publicar.</p><form id="communityUploadForm" class="upload-modal-form" data-astro-cid-xqxsfxgt><input type="hidden" id="uploadMode" value="comentario" data-astro-cid-xqxsfxgt><label class="upload-field" id="fieldFamilia" data-astro-cid-xqxsfxgt><span data-astro-cid-xqxsfxgt>Nombre de familia</span><input id="nombreFamiliaInput" type="text" maxlength="120" placeholder="Ej: Familia Gómez" required data-astro-cid-xqxsfxgt></label><label class="upload-field" id="fieldTitulo" hidden data-astro-cid-xqxsfxgt><span data-astro-cid-xqxsfxgt>Título del video</span><input id="tituloInput" type="text" maxlength="180" placeholder="Ej: Devocional en casa" data-astro-cid-xqxsfxgt></label><label class="upload-field" id="fieldCategoria" hidden data-astro-cid-xqxsfxgt><span data-astro-cid-xqxsfxgt>Categoría</span><input id="categoriaInput" type="text" maxlength="80" placeholder="Ej: Devoción" data-astro-cid-xqxsfxgt></label><label class="upload-field" id="fieldComentario" data-astro-cid-xqxsfxgt><span data-astro-cid-xqxsfxgt>Comentario</span><textarea id="comentarioInput" rows="4" maxlength="2000" placeholder="Comparte tu experiencia..." required data-astro-cid-xqxsfxgt></textarea></label><label class="upload-field" id="fieldArchivo" hidden data-astro-cid-xqxsfxgt><span id="archivoLabel" data-astro-cid-xqxsfxgt>Archivo</span><input id="archivoInput" type="file" data-astro-cid-xqxsfxgt><small id="archivoHelp" data-astro-cid-xqxsfxgt>Selecciona un archivo.</small></label><p class="upload-modal-status" id="uploadModalStatus" role="status" aria-live="polite" data-astro-cid-xqxsfxgt></p><div class="upload-modal-actions" data-astro-cid-xqxsfxgt><button type="button" class="btn-secondary" data-close-upload-modal data-astro-cid-xqxsfxgt>Cancelar</button><button type="submit" class="btn-primary" id="uploadSubmitBtn" data-astro-cid-xqxsfxgt>Enviar</button></div></form></div></div><script>(function(){${defineScriptVars({ apiUrl: "https://familias.vercel.app/api" })}
  (() => {
    const modal = document.getElementById('communityUploadModal');
    if (!modal) return;

    const form = document.getElementById('communityUploadForm');
    const modeInput = document.getElementById('uploadMode');
    const subtitle = document.getElementById('uploadModalSubtitle');
    const title = document.getElementById('uploadModalTitle');
    const status = document.getElementById('uploadModalStatus');
    const submitBtn = document.getElementById('uploadSubmitBtn');

    const fieldFamilia = document.getElementById('fieldFamilia');
    const fieldTitulo = document.getElementById('fieldTitulo');
    const fieldCategoria = document.getElementById('fieldCategoria');
    const fieldDuracion = document.getElementById('fieldDuracion');
    const fieldComentario = document.getElementById('fieldComentario');
    const fieldArchivo = document.getElementById('fieldArchivo');

    const nombreFamiliaInput = document.getElementById('nombreFamiliaInput');
    const tituloInput = document.getElementById('tituloInput');
    const categoriaInput = document.getElementById('categoriaInput');
    const duracionInput = document.getElementById('duracionInput');
    const comentarioInput = document.getElementById('comentarioInput');
    const archivoInput = document.getElementById('archivoInput');
    const archivoLabel = document.getElementById('archivoLabel');
    const archivoHelp = document.getElementById('archivoHelp');

    function setFieldVisibility(el, visible) {
      if (!el) return;
      el.hidden = !visible;
      if (visible) {
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', 'hidden');
      }
    }

    function setStatus(message, isError = false) {
      status.textContent = message || '';
      status.classList.toggle('error', Boolean(isError));
      status.classList.toggle('ok', !isError && Boolean(message));
    }

    function openModal(mode) {
      const currentMode = mode || 'comentario';
      modeInput.value = currentMode;
      setStatus('');
      form.reset();

      setFieldVisibility(fieldFamilia, currentMode !== 'video');
      setFieldVisibility(fieldTitulo, currentMode === 'video');
      setFieldVisibility(fieldCategoria, currentMode === 'video');
      setFieldVisibility(fieldArchivo, currentMode !== 'comentario');
      setFieldVisibility(fieldComentario, currentMode !== 'video');

      comentarioInput.required = currentMode === 'comentario';
      tituloInput.required = currentMode === 'video';
      archivoInput.required = currentMode !== 'comentario';
      nombreFamiliaInput.required = currentMode !== 'video';

      if (currentMode === 'video') {
        title.textContent = 'Subir video';
        subtitle.textContent = 'Comparte un video para publicarlo en la galería.';
        archivoLabel.textContent = 'Archivo de video';
        archivoHelp.textContent = 'Formatos permitidos: MP4, WEBM, OGG, MOV, M4V (máx. 80MB).';
        archivoInput.accept = 'video/mp4,video/webm,video/ogg,video/quicktime,video/x-m4v,.mov,.m4v';
      } else if (currentMode === 'foto') {
        title.textContent = 'Subir foto';
        subtitle.textContent = 'Comparte una imagen familiar. El comentario es opcional.';
        archivoLabel.textContent = 'Imagen';
        archivoHelp.textContent = 'Formatos permitidos: JPG, PNG, WEBP, GIF (máx. 8MB).';
        archivoInput.accept = 'image/jpeg,image/png,image/webp,image/gif';
        comentarioInput.required = false;
      } else {
        title.textContent = 'Compartir comentario';
        subtitle.textContent = 'Escribe un testimonio para la comunidad.';
      }

      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      window.setTimeout(() => {
        if (currentMode === 'video') {
          tituloInput.focus();
        } else {
          nombreFamiliaInput.focus();
        }
      }, 20);
    }

    function closeModal() {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      setStatus('');
    }

    async function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('No se pudo leer el archivo.'));
        reader.readAsDataURL(file);
      });
    }

    function getVideoDuration(file) {
      return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const tempVideo = document.createElement('video');
        tempVideo.preload = 'metadata';
        tempVideo.src = url;
        tempVideo.onloadedmetadata = () => {
          URL.revokeObjectURL(url);
          const totalSeconds = Math.round(tempVideo.duration || 0);
          const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
          const seconds = (totalSeconds % 60).toString().padStart(2, '0');
          resolve(\`\${minutes}:\${seconds}\`);
        };
        tempVideo.onerror = () => {
          URL.revokeObjectURL(url);
          resolve(null);
        };
      });
    }

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const openBtn = target.closest('.js-open-upload');
      if (openBtn) {
        event.preventDefault();
        const mode = openBtn.getAttribute('data-upload-type') || 'comentario';
        openModal(mode);
        return;
      }

      if (target.closest('[data-close-upload-modal]')) {
        event.preventDefault();
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.hidden) closeModal();
    });

    form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const mode = modeInput.value;
      const token = localStorage.getItem('token');

      if (!token) {
        setStatus('Debes iniciar sesión para publicar contenido.', true);
        window.setTimeout(() => {
          window.location.href = '/auth/login';
        }, 700);
        return;
      }

      const nombreFamilia = String(nombreFamiliaInput.value || '').trim();
      const comentario = String(comentarioInput.value || '').trim();

      if (mode !== 'video' && !nombreFamilia) {
        setStatus('El nombre de familia es obligatorio.', true);
        return;
      }

      submitBtn.disabled = true;
      setStatus('Enviando...');

      try {
        let endpoint = '';
        let payload = {};

        if (mode === 'video') {
          const titulo = String(tituloInput.value || '').trim();
          if (!titulo) throw new Error('El título del video es obligatorio.');

          const file = archivoInput.files?.[0];
          if (!file) throw new Error('Selecciona un video.');

          const fileBase64 = await fileToBase64(file);
          const duracion = await getVideoDuration(file);
          endpoint = \`\${apiUrl}/videos/propuesta\`;
          payload = {
            titulo,
            categoria: String(categoriaInput.value || '').trim() || 'Comunidad',
            duracion,
            fileName: file.name,
            fileBase64,
            mimeType: file.type,
          };
        } else if (mode === 'foto') {
          const file = archivoInput.files?.[0];
          if (!file) throw new Error('Selecciona una imagen.');

          const fileBase64 = await fileToBase64(file);
          endpoint = \`\${apiUrl}/galeria\`;
          payload = {
            nombre_familia: nombreFamilia,
            texto: comentario || '',
            tipo: 'foto',
            fileName: file.name,
            fileBase64,
            mimeType: file.type,
          };
        } else {
          if (!comentario) throw new Error('El comentario es obligatorio.');

          endpoint = \`\${apiUrl}/galeria\`;
          payload = {
            nombre_familia: nombreFamilia,
            texto: comentario,
            tipo: 'testimonio',
          };
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: \`Bearer \${token}\`,
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(data?.error || 'No se pudo completar la publicación.');
        }

        setStatus(data?.mensaje || 'Contenido enviado correctamente.');

        // Notificar a los componentes para que se refresquen.
        window.dispatchEvent(new CustomEvent('community:uploaded', { detail: { mode } }));

        window.setTimeout(() => {
          closeModal();
        }, 900);
      } catch (error) {
        setStatus(error instanceof Error ? error.message : 'Error inesperado.', true);
      } finally {
        submitBtn.disabled = false;
      }
    });
  })();
})();<\/script>`;
}, "/Users/useit/Desktop/familias/front/src/components/CommunityUploadModal.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "LibrosDestacados", $$LibrosDestacados, {})}${renderComponent($$result, "NuevasPublicaciones", $$NuevasPublicaciones, {})}${renderComponent($$result, "AutoresDestacados", $$AutoresDestacados, {})}${renderComponent($$result, "VideosRecientes", $$VideosRecientes, {})}${renderComponent($$result, "FamiliasParticipantes", $$FamiliasParticipantes, {})}${renderComponent($$result, "CommunityUploadModal", $$CommunityUploadModal, {})}</main>${renderComponent($$result, "CtaFooter", $$CtaFooter, {})}` })}`;
}, "/Users/useit/Desktop/familias/front/src/pages/index.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
