import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_DxCEpPIS.mjs";
import { t as $$Header } from "./Header_CxLS-9e8.mjs";
import { t as $$CtaFooter } from "./CtaFooter_Dr-dwdrw.mjs";
//#region src/pages/galeria-familiar.astro
var galeria_familiar_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GaleriaFamiliar,
	file: () => $$file,
	url: () => $$url
});
var $$GaleriaFamiliar = createComponent(($$result, $$props, $$slots) => {
	const testimonios = [
		{
			familia: "Familia González",
			fecha: "12 de noviembre de 2024",
			texto: "Este año decidimos leer juntos un libro cristiano cada mes. Ha transformado nuestra convivencia familiar y los niños ya preguntan cuándo toca la siguiente lectura.",
			tipo: "Testimonio",
			likes: 48,
			imagen: false
		},
		{
			familia: "Familia Ramírez",
			fecha: "8 de noviembre de 2024",
			texto: "Nuestra tarde de lectura familiar con \"El Jardín de la Fe\". Los pequeños no quisieron que terminara.",
			tipo: "Foto",
			likes: 62,
			imagen: true
		},
		{
			familia: "Familia Vargas",
			fecha: "5 de noviembre de 2024",
			texto: "Gracias a FamiliaLee encontramos recursos increíbles para enseñar a nuestros hijos sobre la fe. Dios les bendiga a todos los que contribuyen con tanto amor.",
			tipo: "Testimonio",
			likes: 35,
			imagen: false
		},
		{
			familia: "Familia Morales",
			fecha: "1 de noviembre de 2024",
			texto: "Cada domingo después de la iglesia leemos juntos un capítulo. FamiliaLee nos ayudó a encontrar libros adecuados para cada edad de nuestros hijos.",
			tipo: "Testimonio",
			likes: 27,
			imagen: false
		},
		{
			familia: "Familia Herrera",
			fecha: "28 de octubre de 2024",
			texto: "Nuestro momento favorito de la semana: la hora del cuento con libros de FamiliaLee.",
			tipo: "Foto",
			likes: 71,
			imagen: true
		},
		{
			familia: "Familia Torres",
			fecha: "22 de octubre de 2024",
			texto: "Los devocionales para el hogar han sido una bendición. Mi esposo y yo los leemos juntos cada mañana antes del trabajo.",
			tipo: "Testimonio",
			likes: 44,
			imagen: false
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Galería Familiar – FamiliaLee",
		"description": "Testimonios y momentos compartidos por nuestra comunidad.",
		"data-astro-cid-urfchaki": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-urfchaki": true })}${maybeRenderHead($$result)}<main data-astro-cid-urfchaki><section class="page-hero" data-astro-cid-urfchaki><div class="container" data-astro-cid-urfchaki><h1 class="page-title" data-astro-cid-urfchaki>Galería Familiar</h1><p class="page-desc" data-astro-cid-urfchaki>Testimonios y momentos compartidos por nuestra comunidad.</p></div></section><section class="section" data-astro-cid-urfchaki><div class="container" data-astro-cid-urfchaki><div class="galeria-grid" data-astro-cid-urfchaki>${testimonios.map((item) => renderTemplate`<article class="familia-card" data-astro-cid-urfchaki><div class="familia-header" data-astro-cid-urfchaki><div class="familia-avatar" aria-hidden="true" data-astro-cid-urfchaki><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aabb8" stroke-width="1.5" aria-hidden="true" data-astro-cid-urfchaki><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-urfchaki></path><circle cx="12" cy="7" r="4" data-astro-cid-urfchaki></circle></svg></div><div data-astro-cid-urfchaki><p class="familia-nombre" data-astro-cid-urfchaki>${item.familia}</p><time class="familia-fecha" data-astro-cid-urfchaki>${item.fecha}</time></div></div>${item.imagen && renderTemplate`<div class="familia-img" aria-label="Foto de la familia" data-astro-cid-urfchaki></div>`}<p class="familia-texto" data-astro-cid-urfchaki>${item.texto}</p><hr class="familia-divider" data-astro-cid-urfchaki><div class="familia-footer" data-astro-cid-urfchaki><button class="familia-like"${addAttribute(`${item.likes} me gusta`, "aria-label")} data-astro-cid-urfchaki><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-urfchaki><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-astro-cid-urfchaki></path></svg>${item.likes}</button><span class="familia-tipo" data-astro-cid-urfchaki>${item.tipo}</span></div></article>`)}</div></div></section><section class="cta-participar" id="cta-participar-galeria" data-astro-cid-urfchaki><div class="container" data-astro-cid-urfchaki><div class="cta-box" data-astro-cid-urfchaki><h2 data-astro-cid-urfchaki>¿Tu familia quiere participar?</h2><p data-astro-cid-urfchaki>Comparte fotos, videos y testimonios de tu hogar con la comunidad de FamiliaLee.</p><a href="/auth/registro" class="cta-btn" data-astro-cid-urfchaki>Unirse ahora →</a></div></div></section></main>${renderComponent($$result, "CtaFooter", $$CtaFooter, { "data-astro-cid-urfchaki": true })}` })}${renderScript($$result, "/Users/useit/Desktop/familias/front/src/pages/galeria-familiar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/pages/galeria-familiar.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/galeria-familiar.astro";
var $$url = "/galeria-familiar";
//#endregion
//#region \0virtual:astro:page:src/pages/galeria-familiar@_@astro
var page = () => galeria_familiar_exports;
//#endregion
export { page };
