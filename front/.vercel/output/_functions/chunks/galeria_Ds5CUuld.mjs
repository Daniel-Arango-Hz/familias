import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as $$Layout } from "./Layout_DxCEpPIS.mjs";
import { t as $$Header } from "./Header_CxLS-9e8.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Dr-dwdrw.mjs";
//#region src/pages/galeria.astro
var galeria_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Galeria,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Galeria = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Galeria;
	const videos = [
		{
			titulo: "Cómo orar en familia cada día",
			autor: "Carlos Rueda",
			duracion: "12:34",
			vistas: 3400,
			slug: "como-orar-en-familia",
			categoria: "Devoción",
			gradiente: "linear-gradient(135deg,#1565C0,#42A5F5)",
			emoji: "🙏"
		},
		{
			titulo: "Historia bíblica: David y Goliat animada",
			autor: "Ana Martínez",
			duracion: "8:21",
			vistas: 5600,
			slug: "david-y-goliat-animada",
			categoria: "Biblia",
			gradiente: "linear-gradient(135deg,#B71C1C,#EF9A9A)",
			emoji: "⚔️"
		},
		{
			titulo: "Devocional matutino para toda la familia",
			autor: "María Soto",
			duracion: "15:07",
			vistas: 2100,
			slug: "devocional-matutino",
			categoria: "Devoción",
			gradiente: "linear-gradient(135deg,#1B5E20,#81C784)",
			emoji: "☀️"
		},
		{
			titulo: "Cómo enseñar los Salmos a los niños",
			autor: "Ana Martínez",
			duracion: "18:30",
			vistas: 1870,
			slug: "salmos-para-ninos",
			categoria: "Educación",
			gradiente: "linear-gradient(135deg,#F9A825,#FFF176)",
			emoji: "📖"
		},
		{
			titulo: "Matrimonio cristiano: bases bíblicas",
			autor: "Carlos Rueda",
			duracion: "22:45",
			vistas: 4200,
			slug: "matrimonio-cristiano",
			categoria: "Matrimonio",
			gradiente: "linear-gradient(135deg,#880E4F,#F48FB1)",
			emoji: "💍"
		},
		{
			titulo: "Fe en tiempos difíciles",
			autor: "David Herrera",
			duracion: "11:20",
			vistas: 3100,
			slug: "fe-tiempos-dificiles",
			categoria: "Testimonio",
			gradiente: "linear-gradient(135deg,#4527A0,#B39DDB)",
			emoji: "✨"
		}
	];
	const categorias = [
		"Todos",
		"Devoción",
		"Biblia",
		"Educación",
		"Matrimonio",
		"Testimonio"
	];
	const filtro = Astro.url.searchParams.get("categoria") ?? "";
	const videosFiltrados = filtro && filtro !== "Todos" ? videos.filter((v) => v.categoria === filtro) : videos;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Galería de Videos – FamiliaLee",
		"description": "Recursos audiovisuales para la devoción familiar.",
		"data-astro-cid-7pd5emi5": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-7pd5emi5": true })}${maybeRenderHead($$result)}<main data-astro-cid-7pd5emi5><section class="page-hero" data-astro-cid-7pd5emi5><div class="container" data-astro-cid-7pd5emi5><h1 class="page-title" data-astro-cid-7pd5emi5>Videos Recientes</h1><p class="page-desc" data-astro-cid-7pd5emi5>Recursos audiovisuales para la devoción familiar.</p></div></section><section class="section" data-astro-cid-7pd5emi5><div class="container" data-astro-cid-7pd5emi5><!-- Filtros --><div class="cat-filter" role="tablist" aria-label="Filtrar por categoría" data-astro-cid-7pd5emi5>${categorias.map((cat) => renderTemplate`<a${addAttribute(cat === "Todos" ? "/galeria" : `/galeria?categoria=${encodeURIComponent(cat)}`, "href")}${addAttribute(`cat-btn ${(!filtro || filtro === "" || cat === "Todos" && !filtro) && cat === "Todos" ? "active" : ""} ${filtro === cat ? "active" : ""}`, "class")} role="tab" data-astro-cid-7pd5emi5>${cat}</a>`)}</div><div class="videos-grid" data-astro-cid-7pd5emi5>${videosFiltrados.map((video) => renderTemplate`<article class="video-card" data-astro-cid-7pd5emi5><a${addAttribute(`/video/${video.slug}`, "href")} class="video-card-link"${addAttribute(`Ver: ${video.titulo}`, "aria-label")} data-astro-cid-7pd5emi5><div class="video-thumb"${addAttribute(`background: ${video.gradiente}`, "style")} aria-hidden="true" data-astro-cid-7pd5emi5><span class="video-emoji" data-astro-cid-7pd5emi5>${video.emoji}</span>                  <span class="video-duration" data-astro-cid-7pd5emi5>${video.duracion}</span><div class="video-play" data-astro-cid-7pd5emi5><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-7pd5emi5><polygon points="5 3 19 12 5 21 5 3" data-astro-cid-7pd5emi5></polygon></svg></div></div><div class="video-info" data-astro-cid-7pd5emi5><span class="video-cat-badge" data-astro-cid-7pd5emi5>${video.categoria}</span><h2 class="video-titulo" data-astro-cid-7pd5emi5>${video.titulo}</h2><div class="video-meta" data-astro-cid-7pd5emi5><span data-astro-cid-7pd5emi5>${video.autor}</span><div class="video-vistas" data-astro-cid-7pd5emi5><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-7pd5emi5><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-astro-cid-7pd5emi5></path><circle cx="12" cy="12" r="3" data-astro-cid-7pd5emi5></circle></svg>${video.vistas.toLocaleString("es")}</div></div></div></a></article>`)}</div></div></section></main>${renderComponent($$result, "CtaFooter", $$CtaFooter, { "data-astro-cid-7pd5emi5": true })}` })}`;
}, "/Users/useit/Desktop/familias/front/src/pages/galeria.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/galeria.astro";
var $$url = "/galeria";
//#endregion
//#region \0virtual:astro:page:src/pages/galeria@_@astro
var page = () => galeria_exports;
//#endregion
export { page };
