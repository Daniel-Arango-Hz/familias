import { T as createAstro, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as renderScript } from "./script_d5et9MFD.mjs";
//#region src/components/LoginModal.astro
var $$LoginModal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="login-modal-overlay" id="loginModalOverlay" data-astro-cid-xbhdz2uj><div class="login-modal" id="loginModal" data-astro-cid-xbhdz2uj><button class="modal-close" id="modalCloseBtn" aria-label="Cerrar modal" data-astro-cid-xbhdz2uj>✕</button><div class="modal-header" data-astro-cid-xbhdz2uj><h2 id="modalTitle" data-astro-cid-xbhdz2uj>Autenticación requerida</h2></div><div class="modal-content" data-astro-cid-xbhdz2uj><p id="modalMessage" data-astro-cid-xbhdz2uj>Por favor, inicia sesión para continuar.</p></div><div class="modal-actions" data-astro-cid-xbhdz2uj><button class="btn-secondary" id="modalCloseButton" data-astro-cid-xbhdz2uj>Cancelar</button><a href="/auth/login" class="btn-primary" data-astro-cid-xbhdz2uj>Iniciar sesión</a></div></div></div>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/components/LoginModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/components/LoginModal.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "FamiliaLee – Biblioteca Digital Cristiana para Familias", description = "Libros, cuentos, guías y recursos educativos creados por autores y familias para fortalecer la fe en el hogar." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">${renderHead($$result)}</head><body>${renderComponent($$result, "LoginModal", $$LoginModal, {})}${renderSlot($$result, $$slots["default"])}${renderScript($$result, "/Users/useit/Desktop/familias/front/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/useit/Desktop/familias/front/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
