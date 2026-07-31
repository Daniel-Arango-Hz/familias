import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as $$Layout } from "./Layout_DxCEpPIS.mjs";
import { t as $$Header } from "./Header_CxLS-9e8.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Dr-dwdrw.mjs";
import { t as obtenerAutores } from "./api_D4c-A64j.mjs";
//#region src/pages/autores.astro
var autores_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Autores,
	file: () => $$file,
	url: () => $$url
});
var $$Autores = createComponent(async ($$result, $$props, $$slots) => {
	let autores = [];
	try {
		const respuesta = await obtenerAutores();
		autores = Array.isArray(respuesta) ? respuesta : respuesta.data || [];
	} catch (error) {
		console.error("Error al obtener autores:", error);
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Autores – FamiliaLee",
		"description": "Conoce a los autores que crean contenido para bendecir tu hogar.",
		"data-astro-cid-v2jexhuz": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-v2jexhuz": true })}${maybeRenderHead($$result)}<main data-astro-cid-v2jexhuz><section class="page-hero" data-astro-cid-v2jexhuz><div class="container" data-astro-cid-v2jexhuz><h1 class="page-title" data-astro-cid-v2jexhuz>👨‍🎨 Autores</h1><p class="page-desc" data-astro-cid-v2jexhuz>Conoce a quienes crean contenido para bendecir tu hogar.</p></div></section>${autores.length > 0 ? renderTemplate`<section class="section" data-astro-cid-v2jexhuz><div class="container" data-astro-cid-v2jexhuz><div class="autores-grid" data-astro-cid-v2jexhuz>${autores.map((autor) => renderTemplate`<article class="autor-card" data-astro-cid-v2jexhuz><a${addAttribute(`/autor/${autor.slug}`, "href")} class="autor-link" data-astro-cid-v2jexhuz><div class="autor-avatar" data-astro-cid-v2jexhuz>👤</div><h2 class="autor-nombre" data-astro-cid-v2jexhuz>${autor.nombre}</h2><p class="autor-especialidad" data-astro-cid-v2jexhuz>${autor.especialidad || "Autor destacado"}</p><p class="autor-bio" data-astro-cid-v2jexhuz>${autor.biografia || "Creador de contenido para familias"}</p><div class="autor-stats" data-astro-cid-v2jexhuz><div class="stat" data-astro-cid-v2jexhuz><strong data-astro-cid-v2jexhuz>📚 ${autor.total_libros || 0}</strong><span data-astro-cid-v2jexhuz>Libros</span></div><div class="stat" data-astro-cid-v2jexhuz><strong data-astro-cid-v2jexhuz>⬇️ ${(autor.total_descargas || 0).toLocaleString("es")}</strong><span data-astro-cid-v2jexhuz>Descargas</span></div><div class="stat" data-astro-cid-v2jexhuz><strong data-astro-cid-v2jexhuz>⭐ ${autor.total_seguidores || 0}</strong><span data-astro-cid-v2jexhuz>Seguidores</span></div></div></a></article>`)}</div></div></section>` : renderTemplate`<section class="section" data-astro-cid-v2jexhuz><div class="container centered" data-astro-cid-v2jexhuz><p style="font-size: 3rem; margin-bottom: 1rem;" data-astro-cid-v2jexhuz>👨‍🎨</p><h2 data-astro-cid-v2jexhuz>Sin autores disponibles</h2><p data-astro-cid-v2jexhuz>Por ahora no hay autores registrados. ¡Vuelve pronto!</p></div></section>`}</main>${renderComponent($$result, "CtaFooter", $$CtaFooter, { "data-astro-cid-v2jexhuz": true })}` })}`;
}, "/Users/useit/Desktop/familias/front/src/pages/autores.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/autores.astro";
var $$url = "/autores";
//#endregion
//#region \0virtual:astro:page:src/pages/autores@_@astro
var page = () => autores_exports;
//#endregion
export { page };
