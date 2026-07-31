import { g as addAttribute, m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { n as renderScript } from "./Layout_DxCEpPIS.mjs";
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="header" data-astro-cid-nen7h5rs><div class="container header-inner" data-astro-cid-nen7h5rs><a href="/" class="logo" aria-label="FamiliaLee inicio" data-astro-cid-nen7h5rs><div class="logo-image" data-astro-cid-nen7h5rs><img src="/logos/logo.png" alt="CBI Personitas Biblioteca" data-astro-cid-nen7h5rs></div><span class="logo-text" data-astro-cid-nen7h5rs><span class="logo-line-1" data-astro-cid-nen7h5rs>CBI Personitas</span><span class="logo-line-2" data-astro-cid-nen7h5rs>Biblioteca</span></span></a><nav class="nav" aria-label="Navegación principal" data-astro-cid-nen7h5rs><ul class="nav-list" data-astro-cid-nen7h5rs>${[
		{
			label: "Biblioteca",
			href: "/#biblioteca"
		},
		{
			label: "Autores",
			href: "/#autores"
		},
		{
			label: "Galería Familiar",
			href: "/#galeria"
		},
		{
			label: "Recursos",
			href: "/#recursos"
		}
	].map((link) => renderTemplate`<li data-astro-cid-nen7h5rs><a${addAttribute(link.href, "href")} class="nav-link" data-astro-cid-nen7h5rs>${link.label}</a></li>`)}</ul></nav><div class="header-actions" data-astro-cid-nen7h5rs><button class="btn-icon" aria-label="Buscar" data-astro-cid-nen7h5rs><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-nen7h5rs><circle cx="11" cy="11" r="8" data-astro-cid-nen7h5rs></circle><path d="m21 21-4.35-4.35" data-astro-cid-nen7h5rs></path></svg></button><!-- Auth actions (mostrar si NO está logueado) --><div id="auth-actions" class="auth-actions" data-astro-cid-nen7h5rs><a href="/auth/login" class="btn-outline" data-astro-cid-nen7h5rs>🔑 Ingresar</a><a href="/auth/registro" class="btn-primary" data-astro-cid-nen7h5rs>✨ Registrarse ✨</a></div><!-- User menu (mostrar si está logueado) --><div id="user-menu" class="user-menu" style="display: none;" data-astro-cid-nen7h5rs><button class="profile-btn" aria-label="Menú de usuario" aria-expanded="false" data-astro-cid-nen7h5rs><div class="avatar" data-astro-cid-nen7h5rs><span id="avatar-inicial" data-astro-cid-nen7h5rs>U</span></div></button><div class="dropdown-menu" data-astro-cid-nen7h5rs><a href="/perfil" class="menu-item" data-astro-cid-nen7h5rs>👤 Mi Perfil</a><button id="logout-btn" class="menu-item logout" data-astro-cid-nen7h5rs>👋 Cerrar sesión</button></div></div></div><button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" id="menu-toggle" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span></button><!-- Mobile Menu --><nav class="mobile-menu" id="mobile-menu" aria-label="Menú principal móvil" data-astro-cid-nen7h5rs><button class="mobile-menu-link mobile-search" aria-label="Buscar" data-astro-cid-nen7h5rs>🔎 Buscar</button><a href="/#biblioteca" class="mobile-menu-link" data-astro-cid-nen7h5rs>📚 Biblioteca</a><a href="/#autores" class="mobile-menu-link" data-astro-cid-nen7h5rs>✍️ Autores</a><a href="/#galeria" class="mobile-menu-link" data-astro-cid-nen7h5rs>🎨 Galería Familiar</a><a href="/#recursos" class="mobile-menu-link" data-astro-cid-nen7h5rs>📖 Recursos</a><!-- Mobile Auth Actions --><div id="mobile-auth" class="mobile-auth-buttons" data-astro-cid-nen7h5rs><a href="/auth/login" class="btn-outline" data-astro-cid-nen7h5rs>🔑 Ingresar</a><a href="/auth/registro" class="btn-primary" data-astro-cid-nen7h5rs>✨ Registrar</a></div><!-- Mobile User Menu --><div id="mobile-user-menu" style="display: none;" data-astro-cid-nen7h5rs><a href="/perfil" class="mobile-menu-link" data-astro-cid-nen7h5rs>👤 Mi Perfil</a><button id="mobile-logout-btn" class="mobile-menu-link logout" data-astro-cid-nen7h5rs>👋 Cerrar sesión</button></div></nav></div></header>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/components/Header.astro", void 0);
//#endregion
export { $$Header as t };
