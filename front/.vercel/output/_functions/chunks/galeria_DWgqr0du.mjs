import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as renderScript } from "./script_d5et9MFD.mjs";
import { t as $$Layout } from "./Layout_DkrXWXQE.mjs";
import { t as $$Header } from "./Header_Do5vNWZK.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Pqn_5hWI.mjs";
//#region src/pages/galeria.astro
var galeria_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Galeria,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Galeria;
	const API_URL = "https://familias.vercel.app/api";
	const filtros = [
		"Videos",
		"Imágenes",
		"Testimonios"
	];
	const filtro = Astro2.url.searchParams.get("filtro") || "Videos";
	let videos = [];
	let items = [];
	let errorMessage = "";
	function prepararVideo(video) {
		return {
			id: video.id,
			titulo: video.titulo,
			autor: video.autor_nombre || "Anónimo",
			duracion: video.duracion || "00:00",
			vistas: Number(video.vistas || 0),
			likes: Number(video.total_likes || video.likes || 0),
			user_liked: Boolean(video.user_liked),
			slug: video.slug,
			categoria: video.categoria || "Comunidad",
			gradiente: video.gradiente || "linear-gradient(135deg,#1565C0,#42A5F5)",
			emoji: video.emoji || "🎬",
			url: video.url || "#"
		};
	}
	function prepararItem(item) {
		return {
			id: item.id,
			familia: item.nombre_familia || item.usuario_nombre || "Familia participante",
			texto: typeof item.texto === "string" ? item.texto.trim() : "",
			tipo: item.tipo === "foto" ? "Imagen" : "Testimonio",
			imagenUrl: item.imagen_url || null,
			likes: Number(item.total_likes || 0),
			user_liked: Boolean(item.user_liked)
		};
	}
	try {
		if (filtro === "Videos") {
			const res = await fetch(`${API_URL}/videos?limit=12`);
			if (!res.ok) throw new Error("No se pudieron cargar los videos.");
			const payload = await res.json();
			videos = (Array.isArray(payload) ? payload : payload.data || []).map(prepararVideo);
		} else if (filtro === "Imágenes") {
			const res = await fetch(`${API_URL}/galeria?tipo=foto&limit=12`);
			if (!res.ok) throw new Error("No se pudieron cargar las imágenes.");
			const payload = await res.json();
			items = (Array.isArray(payload) ? payload : payload.data || []).map(prepararItem);
		} else {
			const res = await fetch(`${API_URL}/galeria?tipo=testimonio&limit=12`);
			if (!res.ok) throw new Error("No se pudieron cargar los testimonios.");
			const payload = await res.json();
			items = (Array.isArray(payload) ? payload : payload.data || []).map(prepararItem);
		}
	} catch (error) {
		console.error("Galería error:", error);
		errorMessage = error instanceof Error ? error.message : "Fallo al cargar la galería";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Galería Familiar – FamiliaLee",
		"description": "Galería comunitaria de videos, imágenes y testimonios de familia.",
		"data-astro-cid-7pd5emi5": true
	}, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-7pd5emi5": true })}${maybeRenderHead($$result2)}<main data-astro-cid-7pd5emi5><section class="page-hero" data-astro-cid-7pd5emi5><div class="container" data-astro-cid-7pd5emi5><h1 class="page-title" data-astro-cid-7pd5emi5>Galería Familiar</h1><p class="page-desc" data-astro-cid-7pd5emi5>Explora videos, imágenes y testimonios compartidos por nuestra comunidad.</p></div></section><section class="section" id="galeriaPage"${addAttribute(API_URL, "data-api")} data-astro-cid-7pd5emi5><div class="container" data-astro-cid-7pd5emi5><div class="cat-filter" role="tablist" aria-label="Filtrar por tipo de galería" data-astro-cid-7pd5emi5>${filtros.map((cat) => renderTemplate`<a${addAttribute(`/galeria?filtro=${encodeURIComponent(cat)}`, "href")}${addAttribute(`cat-btn ${cat === filtro ? "active" : ""}`, "class")} role="tab" data-astro-cid-7pd5emi5>${cat}</a>`)}</div>${errorMessage ? renderTemplate`<div class="error-box" data-astro-cid-7pd5emi5><p data-astro-cid-7pd5emi5>${errorMessage}</p></div>` : filtro === "Videos" ? videos.length > 0 ? renderTemplate`<div class="videos-grid" data-astro-cid-7pd5emi5>${videos.map((video) => renderTemplate`<article class="video-card" role="button" tabindex="0"${addAttribute(video.url, "data-video-url")}${addAttribute(video.titulo, "data-video-titulo")}${addAttribute(video.autor, "data-video-autor")}${addAttribute(video.slug, "data-video-slug")} data-astro-cid-7pd5emi5><div class="video-card-link" data-astro-cid-7pd5emi5><div class="video-thumb"${addAttribute(`background: ${video.gradiente}`, "style")} aria-hidden="true" data-astro-cid-7pd5emi5><span class="video-emoji" data-astro-cid-7pd5emi5>${video.emoji}</span><span class="video-duration" data-astro-cid-7pd5emi5>${video.duracion}</span><div class="video-play" data-astro-cid-7pd5emi5><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-7pd5emi5><polygon points="5 3 19 12 5 21 5 3" data-astro-cid-7pd5emi5></polygon></svg></div></div><div class="video-info" data-astro-cid-7pd5emi5><span class="video-cat-badge" data-astro-cid-7pd5emi5>${video.categoria}</span><h2 class="video-titulo" data-astro-cid-7pd5emi5>${video.titulo}</h2><div class="video-meta" data-astro-cid-7pd5emi5><span data-astro-cid-7pd5emi5>${video.autor}</span><div class="video-meta-right" data-astro-cid-7pd5emi5><div class="video-vistas" data-astro-cid-7pd5emi5><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-7pd5emi5><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-astro-cid-7pd5emi5></path><circle cx="12" cy="12" r="3" data-astro-cid-7pd5emi5></circle></svg><span class="video-vistas-count" data-astro-cid-7pd5emi5>${video.vistas.toLocaleString("es")} vistas</span></div></div></div></div></div></article>`)}</div>` : renderTemplate`<div class="empty-state" data-astro-cid-7pd5emi5><p data-astro-cid-7pd5emi5>No hay videos disponibles en este momento.</p></div>` : items.length > 0 ? renderTemplate`<div class="galeria-grid" data-astro-cid-7pd5emi5>${items.map((item) => renderTemplate`<article class="galeria-card" data-astro-cid-7pd5emi5>${item.imagenUrl ? renderTemplate`<img class="galeria-img"${addAttribute(item.imagenUrl, "src")}${addAttribute(`Imagen de ${item.familia}`, "alt")} loading="lazy" data-astro-cid-7pd5emi5>` : null}<div class="galeria-body" data-astro-cid-7pd5emi5><div class="galeria-meta" data-astro-cid-7pd5emi5><span class="galeria-label" data-astro-cid-7pd5emi5>${item.tipo}</span><span class="galeria-author" data-astro-cid-7pd5emi5>${item.familia}</span><button type="button" class="galeria-like-btn"${addAttribute(item.id, "data-id")}${addAttribute(item.user_liked ? "true" : "false", "data-liked")}${addAttribute(item.user_liked ? "true" : "false", "aria-pressed")}${addAttribute(item.user_liked ? `Quitar me gusta a ${item.tipo} de ${item.familia}` : `Dar me gusta a ${item.tipo} de ${item.familia}`, "aria-label")} data-astro-cid-7pd5emi5><svg width="14" height="14" viewBox="0 0 24 24"${addAttribute(item.user_liked ? "currentColor" : "none", "fill")} stroke="currentColor" aria-hidden="true" data-astro-cid-7pd5emi5><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-7pd5emi5></path></svg><span class="galeria-likes-count" data-astro-cid-7pd5emi5>${item.likes.toLocaleString("es")}</span></button></div>${item.texto ? renderTemplate`<p class="galeria-text" data-astro-cid-7pd5emi5>${item.texto}</p>` : renderTemplate`<p class="galeria-text" data-astro-cid-7pd5emi5>${item.tipo} compartido por la comunidad.</p>`}</div></article>`)}</div>` : renderTemplate`<div class="empty-state" data-astro-cid-7pd5emi5><p data-astro-cid-7pd5emi5>No hay contenido disponible para este filtro.</p></div>`}</div></section><div id="videoPlayerModal" class="vplayer-overlay" aria-hidden="true" style="display:none;" data-astro-cid-7pd5emi5><div class="vplayer-backdrop" data-astro-cid-7pd5emi5></div><div class="vplayer-card" role="dialog" aria-modal="true" aria-label="Reproductor de video" data-astro-cid-7pd5emi5><div class="vplayer-header" data-astro-cid-7pd5emi5><div data-astro-cid-7pd5emi5><p class="vplayer-titulo" id="vplayerTitulo" data-astro-cid-7pd5emi5></p><p class="vplayer-autor" id="vplayerAutor" data-astro-cid-7pd5emi5></p></div><button type="button" class="vplayer-close" id="vplayerClose" aria-label="Cerrar" data-astro-cid-7pd5emi5>×</button></div><video id="vplayerVideo" class="vplayer-video" controls playsinline preload="metadata" data-astro-cid-7pd5emi5>Tu navegador no soporta la reproducción de video.</video></div></div>${renderScript($$result2, "/Users/useit/Desktop/familias/front/src/pages/galeria.astro?astro&type=script&index=0&lang.ts")}</main>${renderComponent($$result2, "CtaFooter", $$CtaFooter, { "data-astro-cid-7pd5emi5": true })}` })}`;
}, "/Users/useit/Desktop/familias/front/src/pages/galeria.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/galeria.astro";
var $$url = "/galeria";
//#endregion
//#region \0virtual:astro:page:src/pages/galeria@_@astro
var page = () => galeria_exports;
//#endregion
export { page };
