import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as unescapeHTML, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_DxCEpPIS.mjs";
import { t as $$Header } from "./Header_CxLS-9e8.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Dr-dwdrw.mjs";
import { t as $$BookCard } from "./BookCard_BpfJ-D9W.mjs";
import { t as libros } from "./libros_CbyaMlUI.mjs";
//#region src/pages/panel.astro
var panel_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Panel,
	file: () => $$file,
	url: () => $$url
});
var $$Panel = createComponent(($$result, $$props, $$slots) => {
	const usuario = {
		nombre: "María González",
		email: "maria@ejemplo.com",
		tipo: "familia",
		librosGuardados: libros.slice(0, 3),
		librosDescargados: libros.slice(1, 4)
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Mi Panel – FamiliaLee",
		"description": "Tu espacio personal en FamiliaLee.",
		"data-astro-cid-6bxwsqyu": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-6bxwsqyu": true })}${maybeRenderHead($$result)}<main data-astro-cid-6bxwsqyu><section class="panel-hero" data-astro-cid-6bxwsqyu><div class="container panel-hero-inner" data-astro-cid-6bxwsqyu><div class="panel-avatar" aria-hidden="true" data-astro-cid-6bxwsqyu><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9aabb8" stroke-width="1.5" aria-hidden="true" data-astro-cid-6bxwsqyu><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-6bxwsqyu></path><circle cx="12" cy="7" r="4" data-astro-cid-6bxwsqyu></circle></svg></div><div data-astro-cid-6bxwsqyu><h1 class="panel-nombre" data-astro-cid-6bxwsqyu>Hola, ${usuario.nombre} 👋</h1><p class="panel-email" data-astro-cid-6bxwsqyu>${usuario.email}</p></div><a href="/panel/editar" class="btn-edit" data-astro-cid-6bxwsqyu><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-6bxwsqyu><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" data-astro-cid-6bxwsqyu></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" data-astro-cid-6bxwsqyu></path></svg>Editar perfil</a><a href="/subir-libro" class="btn-upload js-require-login-upload" data-astro-cid-6bxwsqyu><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-6bxwsqyu><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-6bxwsqyu></path><polyline points="17 8 12 3 7 8" data-astro-cid-6bxwsqyu></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-6bxwsqyu></line></svg>Subir Libro</a></div></section><section class="section" data-astro-cid-6bxwsqyu><div class="container panel-layout" data-astro-cid-6bxwsqyu><!-- Sidebar de navegación del panel --><nav class="panel-nav" aria-label="Navegación del panel" data-astro-cid-6bxwsqyu><ul class="panel-nav-list" data-astro-cid-6bxwsqyu>${[{
		label: "Guardados",
		href: "/panel/guardados",
		activo: false,
		icon: "<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/>"
	}, {
		label: "Publicaciones",
		href: "/panel/publicaciones",
		activo: true,
		icon: "<path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"/>"
	}].map((item) => renderTemplate`<li data-astro-cid-6bxwsqyu><a${addAttribute(item.href, "href")}${addAttribute(`panel-nav-link ${item.activo ? "active" : ""}`, "class")} data-astro-cid-6bxwsqyu><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-6bxwsqyu>${unescapeHTML(item.icon)}</svg>${item.label}</a></li>`)}</ul></nav><!-- Contenido principal del panel --><div class="panel-content" data-astro-cid-6bxwsqyu><!-- Stats rápidos --><div class="stats-row" data-astro-cid-6bxwsqyu><div class="stat-card" data-astro-cid-6bxwsqyu><strong data-astro-cid-6bxwsqyu>${usuario.librosDescargados.length}</strong><span data-astro-cid-6bxwsqyu>Descargados</span></div><div class="stat-card" data-astro-cid-6bxwsqyu><strong data-astro-cid-6bxwsqyu>${usuario.librosGuardados.length}</strong><span data-astro-cid-6bxwsqyu>Guardados</span></div><div class="stat-card" data-astro-cid-6bxwsqyu><strong data-astro-cid-6bxwsqyu>2</strong><span data-astro-cid-6bxwsqyu>Publicaciones</span></div></div><!-- Libros descargados --><div class="panel-section" data-astro-cid-6bxwsqyu><div class="section-header section-header-row" data-astro-cid-6bxwsqyu><div class="section-header" data-astro-cid-6bxwsqyu><h2 data-astro-cid-6bxwsqyu>Libros Descargados</h2><p data-astro-cid-6bxwsqyu>Tu historial de descargas</p></div><a href="/biblioteca" class="ver-mas" data-astro-cid-6bxwsqyu>Explorar más →</a></div><div class="panel-books-grid" data-astro-cid-6bxwsqyu>${usuario.librosDescargados.map((libro) => renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, {
		"libro": libro,
		"data-astro-cid-6bxwsqyu": true
	})}`)}</div></div><!-- Libros guardados --><div class="panel-section" data-astro-cid-6bxwsqyu><div class="section-header" data-astro-cid-6bxwsqyu><h2 data-astro-cid-6bxwsqyu>Lista de Deseos</h2><p data-astro-cid-6bxwsqyu>Libros que guardaste para leer después</p></div><div class="panel-books-grid" data-astro-cid-6bxwsqyu>${usuario.librosGuardados.map((libro) => renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, {
		"libro": libro,
		"data-astro-cid-6bxwsqyu": true
	})}`)}</div></div></div></div></section></main>${renderComponent($$result, "CtaFooter", $$CtaFooter, { "data-astro-cid-6bxwsqyu": true })}` })}${renderScript($$result, "/Users/useit/Desktop/familias/front/src/pages/panel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/pages/panel.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/panel.astro";
var $$url = "/panel";
//#endregion
//#region \0virtual:astro:page:src/pages/panel@_@astro
var page = () => panel_exports;
//#endregion
export { page };
