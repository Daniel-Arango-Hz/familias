import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DqkcE3sw.mjs";
import { t as createComponent } from "./compiler_uhih2xtZ.mjs";
import { t as $$Layout } from "./Layout_BUTokUE6.mjs";
import { t as $$Header } from "./Header_B7zC4OBp.mjs";
import { t as $$CtaFooter } from "./CtaFooter_B0R3zWUg.mjs";
import { n as obtenerLibros } from "./api_DJZU8zp9.mjs";
import { t as $$BookCard } from "./BookCard_CU2I_Mhr.mjs";
//#region src/pages/biblioteca.astro
var biblioteca_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Biblioteca,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Biblioteca = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Biblioteca;
	const validOrders = /* @__PURE__ */ new Set([
		"todos",
		"destacado",
		"nuevo",
		"descargas",
		"rating"
	]);
	const ordenParam = Astro.url.searchParams.get("orden") ?? "todos";
	const orden = validOrders.has(ordenParam) ? ordenParam : "todos";
	const filtroCategoria = Astro.url.searchParams.get("categoria") ?? "";
	const filtroEdad = Astro.url.searchParams.get("edad") ?? "";
	const q = Astro.url.searchParams.get("q") ?? "";
	let respuesta = { data: [] };
	let catalogoCompleto = [];
	try {
		const [respuestaFiltrada, respuestaCatalogo] = await Promise.all([obtenerLibros({
			orden: orden === "todos" ? void 0 : orden,
			categoria: filtroCategoria || void 0,
			edad: filtroEdad || void 0,
			q: q || void 0,
			limite: 1e3
		}), obtenerLibros({ limite: 1e3 })]);
		respuesta = respuestaFiltrada;
		catalogoCompleto = respuestaCatalogo.data || [];
	} catch (error) {
		console.error("Error al obtener libros:", error);
	}
	let librosFiltrados = respuesta.data || [];
	if (q) {
		const query = q.toLowerCase();
		librosFiltrados = librosFiltrados.filter((l) => l.titulo.toLowerCase().includes(query) || l.autor_nombre?.toLowerCase().includes(query) || l.categorias?.some((c) => c.toLowerCase().includes(query)));
	}
	const categorias = Array.from(new Set((catalogoCompleto.length ? catalogoCompleto : librosFiltrados).flatMap((l) => l.categorias || [])));
	const edades = Array.from(new Set((catalogoCompleto.length ? catalogoCompleto : librosFiltrados).map((l) => l.edad_rango).filter(Boolean)));
	function buildBibliotecaUrl(next) {
		const params = new URLSearchParams();
		const ordenNext = next.orden !== void 0 ? next.orden : orden;
		params.set("orden", ordenNext || "todos");
		const categoria = next.categoria !== void 0 ? next.categoria : filtroCategoria;
		const edad = next.edad !== void 0 ? next.edad : filtroEdad;
		const texto = next.q !== void 0 ? next.q : q;
		if (categoria) params.set("categoria", categoria);
		if (edad) params.set("edad", edad);
		if (texto) params.set("q", texto);
		return `/biblioteca?${params.toString()}`;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Biblioteca – FamiliaLee",
		"description": "Explora todos los libros y recursos de FamiliaLee.",
		"data-astro-cid-xybvlisa": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-xybvlisa": true })}${maybeRenderHead($$result)}<main data-astro-cid-xybvlisa><section class="page-hero" data-astro-cid-xybvlisa><div class="container" data-astro-cid-xybvlisa><div class="hero-content" data-astro-cid-xybvlisa><h1 class="page-title" data-astro-cid-xybvlisa>📚 ¡Descubre Historias Increíbles! 📚</h1><p class="page-desc" data-astro-cid-xybvlisa>Explora nuestros libros especiales, llenos de aventuras, valores y diversión para toda la familia.</p></div></div></section><section class="section" data-astro-cid-xybvlisa><div class="container biblioteca-layout" data-astro-cid-xybvlisa><!-- Sidebar de filtros --><aside class="sidebar" aria-label="Filtros" data-astro-cid-xybvlisa><div class="sidebar-section" data-astro-cid-xybvlisa><h2 class="sidebar-title" data-astro-cid-xybvlisa>Ordenar por</h2><ul class="filter-list" data-astro-cid-xybvlisa>${[
		{
			value: "todos",
			label: "Todos"
		},
		{
			value: "destacado",
			label: "Destacados"
		},
		{
			value: "nuevo",
			label: "Nuevos"
		},
		{
			value: "descargas",
			label: "Más descargados"
		},
		{
			value: "rating",
			label: "Mejor valorados"
		}
	].map(({ value, label }) => renderTemplate`<li data-astro-cid-xybvlisa><a${addAttribute(buildBibliotecaUrl({ orden: value }), "href")} data-filter-kind="orden"${addAttribute(value, "data-filter-value")}${addAttribute(`filter-link ${orden === value ? "active" : ""}`, "class")} data-astro-cid-xybvlisa>${label}</a></li>`)}</ul></div><div class="sidebar-section" data-astro-cid-xybvlisa><h2 class="sidebar-title" data-astro-cid-xybvlisa>Categoría</h2><ul class="filter-list" data-astro-cid-xybvlisa><li data-astro-cid-xybvlisa><a${addAttribute(buildBibliotecaUrl({ categoria: "" }), "href")} data-filter-kind="categoria" data-filter-value=""${addAttribute(`filter-link ${!filtroCategoria ? "active" : ""}`, "class")} data-astro-cid-xybvlisa>Todas</a></li>${categorias.map((cat) => renderTemplate`<li data-astro-cid-xybvlisa><a${addAttribute(buildBibliotecaUrl({ categoria: cat }), "href")} data-filter-kind="categoria"${addAttribute(cat, "data-filter-value")}${addAttribute(`filter-link ${filtroCategoria === cat ? "active" : ""}`, "class")} data-astro-cid-xybvlisa>${cat}</a></li>`)}</ul></div><div class="sidebar-section" data-astro-cid-xybvlisa><h2 class="sidebar-title" data-astro-cid-xybvlisa>Edad</h2><ul class="filter-list" data-astro-cid-xybvlisa><li data-astro-cid-xybvlisa><a${addAttribute(buildBibliotecaUrl({ edad: "" }), "href")} data-filter-kind="edad" data-filter-value=""${addAttribute(`filter-link ${!filtroEdad ? "active" : ""}`, "class")} data-astro-cid-xybvlisa>Todas las edades</a></li>${edades.map((edad) => renderTemplate`<li data-astro-cid-xybvlisa><a${addAttribute(buildBibliotecaUrl({ edad }), "href")} data-filter-kind="edad"${addAttribute(edad, "data-filter-value")}${addAttribute(`filter-link ${filtroEdad === edad ? "active" : ""}`, "class")} data-astro-cid-xybvlisa>${edad}</a></li>`)}</ul></div></aside><!-- Grid de libros --><div class="main-content" data-astro-cid-xybvlisa><div class="results-header" data-astro-cid-xybvlisa><p class="results-count" data-astro-cid-xybvlisa><strong data-astro-cid-xybvlisa>${librosFiltrados.length}</strong> ${librosFiltrados.length === 1 ? "libro encontrado" : "libros encontrados"}${q && renderTemplate`<span data-astro-cid-xybvlisa> para "<em data-astro-cid-xybvlisa>${q}</em>"</span>`}</p></div>${librosFiltrados.length > 0 ? renderTemplate`<div class="books-grid" data-astro-cid-xybvlisa>${librosFiltrados.map((libro) => {
		const libroAdaptado = {
			slug: libro.slug,
			titulo: libro.titulo,
			autor: libro.autor_nombre || "Anónimo",
			autorSlug: libro.autor_slug || (libro.autor_nombre || "anonimo").toLowerCase().replace(/\s+/g, "-"),
			descripcion: libro.descripcion,
			portadaGradiente: libro.portada_gradiente || "from-blue-500 to-indigo-600",
			portadaIcono: libro.portada_icono || "📖",
			categorias: libro.categorias || [],
			rating: libro.rating_promedio || 0,
			votos: libro.total_valoraciones || 0,
			descargas: libro.descargas_total || 0,
			edadRango: libro.edad_rango || "5-12",
			destacado: libro.destacado || false,
			nuevo: libro.nuevo || false,
			paginas: libro.paginas_total || libro.paginas || 1,
			anio: libro.anio || (/* @__PURE__ */ new Date()).getFullYear(),
			paginasContenido: Array.isArray(libro.paginas) ? libro.paginas : []
		};
		return renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, {
			"libro": libroAdaptado,
			"data-astro-cid-xybvlisa": true
		})}`;
	})}</div>` : renderTemplate`<div class="empty-state" data-astro-cid-xybvlisa><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-xybvlisa><rect x="3" y="4" width="13" height="16" rx="2" data-astro-cid-xybvlisa></rect><path d="M7 8h5M7 12h5M7 16h3" stroke-linecap="round" data-astro-cid-xybvlisa></path><circle cx="18" cy="18" r="4" data-astro-cid-xybvlisa></circle><line x1="20.83" y1="20.83" x2="22.5" y2="22.5" data-astro-cid-xybvlisa></line></svg><p data-astro-cid-xybvlisa>No se encontraron libros con los filtros seleccionados.</p><a href="/biblioteca" class="btn-reset" data-astro-cid-xybvlisa>Ver todos los libros</a></div>`}</div></div></section></main>${renderComponent($$result, "CtaFooter", $$CtaFooter, { "data-astro-cid-xybvlisa": true })}` })}`;
}, "/Users/useit/Desktop/familias/front/src/pages/biblioteca.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/biblioteca.astro";
var $$url = "/biblioteca";
//#endregion
//#region \0virtual:astro:page:src/pages/biblioteca@_@astro
var page = () => biblioteca_exports;
//#endregion
export { page };
