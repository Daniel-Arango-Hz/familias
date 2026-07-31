import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, u as renderTemplate } from "./server_BzieqcK4.mjs";
import { t as createComponent } from "./compiler_C42j2guM.mjs";
import { t as renderScript } from "./script_d5et9MFD.mjs";
//#region src/pages/admin.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Admin,
	file: () => $$file,
	url: () => $$url
});
var $$Admin = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="admin-wrap" data-astro-cid-hfbr3nnz><h1 data-astro-cid-hfbr3nnz>Panel de administración</h1><p class="muted" data-astro-cid-hfbr3nnz>Requiere token de administrador en \`localStorage.token\`.</p><div class="controls" data-astro-cid-hfbr3nnz><label for="resource" data-astro-cid-hfbr3nnz>Recurso:</label><select id="resource" data-astro-cid-hfbr3nnz><option value="libros" data-astro-cid-hfbr3nnz>Libros</option><option value="usuarios" data-astro-cid-hfbr3nnz>Usuarios</option><option value="testimonios" data-astro-cid-hfbr3nnz>Testimonios</option><option value="videos" data-astro-cid-hfbr3nnz>Videos</option><option value="autores" data-astro-cid-hfbr3nnz>Autores</option></select><button id="refreshBtn" class="btn" data-astro-cid-hfbr3nnz>Refrescar</button><span id="status" class="muted" data-astro-cid-hfbr3nnz></span></div><div id="listContainer" data-astro-cid-hfbr3nnz></div><div id="editModal" hidden class="modal" aria-hidden="true" data-astro-cid-hfbr3nnz><div class="modal-card" data-astro-cid-hfbr3nnz><h3 id="editTitle" data-astro-cid-hfbr3nnz>Editar</h3><textarea id="editBody" style="width:100%;height:260px;font-family:monospace" data-astro-cid-hfbr3nnz></textarea><div style="display:flex;gap:.5rem;justify-content:flex-end;margin-top:.5rem" data-astro-cid-hfbr3nnz><button id="cancelEdit" class="btn" data-astro-cid-hfbr3nnz>Cancelar</button><button id="saveEdit" class="btn" data-astro-cid-hfbr3nnz>Guardar</button></div></div></div></div>${renderScript($$result, "/Users/useit/Desktop/familias/front/src/pages/admin.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/useit/Desktop/familias/front/src/pages/admin.astro", void 0);
var $$file = "/Users/useit/Desktop/familias/front/src/pages/admin.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin@_@astro
var page = () => admin_exports;
//#endregion
export { page };
