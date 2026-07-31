import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DqkcE3sw.mjs";
import { t as createComponent } from "./compiler_uhih2xtZ.mjs";
import { t as renderScript } from "./script_VLZeParw.mjs";
import { t as $$Layout } from "./Layout_BUTokUE6.mjs";
//#region src/pages/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Dashboard – FamiliaLee",
		"description": "Tu panel de control en FamiliaLee",
		"data-astro-cid-gopsdxsp": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="dashboard-main" data-astro-cid-gopsdxsp><div class="container" data-astro-cid-gopsdxsp><div class="dashboard-header" data-astro-cid-gopsdxsp><h1 class="dashboard-title" data-astro-cid-gopsdxsp>🌟 ¡Bienvenido a tu Mundo! 🌟</h1><p class="dashboard-subtitle" data-astro-cid-gopsdxsp>Aquí encontrarás tus libros favoritos y mucho más</p></div><div class="dashboard-grid" data-astro-cid-gopsdxsp><a href="/perfil" class="dashboard-card card-blue" data-astro-cid-gopsdxsp><div class="card-icon" data-astro-cid-gopsdxsp>👤</div><h3 data-astro-cid-gopsdxsp>Mi Perfil</h3><p data-astro-cid-gopsdxsp>Edita tu información</p></a><a href="/mis-libros" class="dashboard-card card-purple" data-astro-cid-gopsdxsp><div class="card-icon" data-astro-cid-gopsdxsp>📚</div><h3 data-astro-cid-gopsdxsp>Mis Libros</h3><p data-astro-cid-gopsdxsp>Accede a tus favoritos</p></a><a href="/mis-descargas" class="dashboard-card card-green" data-astro-cid-gopsdxsp><div class="card-icon" data-astro-cid-gopsdxsp>⬇️</div><h3 data-astro-cid-gopsdxsp>Descargas</h3><p data-astro-cid-gopsdxsp>Historial de descargas</p></a><a href="/mi-biblioteca" class="dashboard-card card-pink" data-astro-cid-gopsdxsp><div class="card-icon" data-astro-cid-gopsdxsp>🎨</div><h3 data-astro-cid-gopsdxsp>Mi Biblioteca</h3><p data-astro-cid-gopsdxsp>Gestiona tu colección</p></a></div></div></main>` })}${renderScript($$result, "/Users/useit/Desktop/familias/front/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/pages/dashboard.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/dashboard.astro";
var $$url = "/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
