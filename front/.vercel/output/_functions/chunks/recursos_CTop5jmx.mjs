import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as $$Layout } from "./Layout_DkrXWXQE.mjs";
import { t as $$Header } from "./Header_Do5vNWZK.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Pqn_5hWI.mjs";
import { t as $$BookCard } from "./BookCard_yWMwnT1h.mjs";
import { t as libros } from "./libros_CbyaMlUI.mjs";
//#region src/pages/recursos.astro
var recursos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Recursos,
	file: () => $$file,
	url: () => $$url
});
var $$Recursos = createComponent(($$result, $$props, $$slots) => {
	const recursosDestacados = libros.slice(0, 4);
	const guias = [
		{
			titulo: "Cómo establecer devocionales en familia",
			tipo: "Guía PDF",
			paginas: 12
		},
		{
			titulo: "Plan de lectura bíblica para niños",
			tipo: "Plan de lectura",
			paginas: 8
		},
		{
			titulo: "Actividades de fe para hacer en casa",
			tipo: "Actividades",
			paginas: 20
		},
		{
			titulo: "Oraciones para cada momento del día",
			tipo: "Guía PDF",
			paginas: 16
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Recursos – FamiliaLee",
		"description": "Guías, planes y recursos para fortalecer la fe en tu hogar.",
		"data-astro-cid-bmkygcgj": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bmkygcgj": true })}${maybeRenderHead($$result)}<main data-astro-cid-bmkygcgj><section class="page-hero" data-astro-cid-bmkygcgj><div class="container" data-astro-cid-bmkygcgj><h1 class="page-title" data-astro-cid-bmkygcgj>Recursos</h1><p class="page-desc" data-astro-cid-bmkygcgj>Guías, planes y herramientas para fortalecer la fe en tu hogar.</p></div></section><section class="section section-bg" data-astro-cid-bmkygcgj><div class="container" data-astro-cid-bmkygcgj><div class="section-header" data-astro-cid-bmkygcgj><h2 data-astro-cid-bmkygcgj>Guías y Herramientas</h2><p data-astro-cid-bmkygcgj>Recursos gratuitos para tu familia</p></div><div class="guias-grid" data-astro-cid-bmkygcgj>${guias.map((guia) => renderTemplate`<article class="guia-card" data-astro-cid-bmkygcgj><div class="guia-icon" aria-hidden="true" data-astro-cid-bmkygcgj><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-bmkygcgj><rect x="3" y="4" width="13" height="16" rx="2" data-astro-cid-bmkygcgj></rect><path d="M7 8h5M7 12h5M7 16h3" stroke-linecap="round" data-astro-cid-bmkygcgj></path></svg></div><div class="guia-info" data-astro-cid-bmkygcgj><span class="guia-tipo" data-astro-cid-bmkygcgj>${guia.tipo}</span><h3 class="guia-titulo" data-astro-cid-bmkygcgj>${guia.titulo}</h3><p class="guia-paginas" data-astro-cid-bmkygcgj>${guia.paginas} páginas</p></div><a href="#" class="guia-btn"${addAttribute(`Descargar ${guia.titulo}`, "aria-label")} data-astro-cid-bmkygcgj><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-bmkygcgj><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-bmkygcgj></path><polyline points="7 10 12 15 17 10" data-astro-cid-bmkygcgj></polyline><line x1="12" y1="15" x2="12" y2="3" data-astro-cid-bmkygcgj></line></svg>Descargar</a></article>`)}</div></div></section><section class="section" data-astro-cid-bmkygcgj><div class="container" data-astro-cid-bmkygcgj><div class="section-header section-header-row" data-astro-cid-bmkygcgj><div class="section-header" data-astro-cid-bmkygcgj><h2 data-astro-cid-bmkygcgj>Libros Recomendados</h2><p data-astro-cid-bmkygcgj>Selección especial para comenzar</p></div><a href="/biblioteca" class="ver-mas" data-astro-cid-bmkygcgj>Ver biblioteca completa →</a></div><div class="libros-grid" data-astro-cid-bmkygcgj>${recursosDestacados.map((libro) => renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, {
		"libro": libro,
		"data-astro-cid-bmkygcgj": true
	})}`)}</div></div></section></main>${renderComponent($$result, "CtaFooter", $$CtaFooter, { "data-astro-cid-bmkygcgj": true })}` })}`;
}, "/Users/useit/Desktop/familias/front/src/pages/recursos.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/recursos.astro";
var $$url = "/recursos";
//#endregion
//#region \0virtual:astro:page:src/pages/recursos@_@astro
var page = () => recursos_exports;
//#endregion
export { page };
