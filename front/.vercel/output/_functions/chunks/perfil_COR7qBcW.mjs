import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DqkcE3sw.mjs";
import { t as createComponent } from "./compiler_uhih2xtZ.mjs";
import { t as renderScript } from "./script_VLZeParw.mjs";
import { t as $$Layout } from "./Layout_BUTokUE6.mjs";
//#region src/pages/perfil.astro
var perfil_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Perfil,
	file: () => $$file,
	url: () => $$url
});
var $$Perfil = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Mi Perfil – FamiliaLee",
		"description": "Administra tu perfil en FamiliaLee",
		"data-astro-cid-xrffivpu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="profile-main" data-astro-cid-xrffivpu><div class="container" data-astro-cid-xrffivpu><div class="profile-header" data-astro-cid-xrffivpu><h1 class="profile-title" data-astro-cid-xrffivpu>👤 Mi Perfil</h1><p class="profile-subtitle" data-astro-cid-xrffivpu>Administra tu información personal</p></div><div class="profile-grid" data-astro-cid-xrffivpu><div class="profile-card library-card" data-astro-cid-xrffivpu><h3 data-astro-cid-xrffivpu>📚 Mis Libros</h3><p class="library-desc" data-astro-cid-xrffivpu>Aquí verás los libros que has publicado en la comunidad.</p><a href="/panel/publicaciones" class="library-link" data-astro-cid-xrffivpu>Ver mis libros publicados</a></div><div class="profile-card library-card" data-astro-cid-xrffivpu><h3 data-astro-cid-xrffivpu>🗂️ Mi Biblioteca</h3><p class="library-desc" data-astro-cid-xrffivpu>Accede a los libros que has guardado para leer después.</p><a href="/panel/guardados" class="library-link" data-astro-cid-xrffivpu>Ver libros guardados</a></div></div></div></main>` })}${renderScript($$result, "/Users/useit/Desktop/familias/front/src/pages/perfil.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/pages/perfil.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/perfil.astro";
var $$url = "/perfil";
//#endregion
//#region \0virtual:astro:page:src/pages/perfil@_@astro
var page = () => perfil_exports;
//#endregion
export { page };
