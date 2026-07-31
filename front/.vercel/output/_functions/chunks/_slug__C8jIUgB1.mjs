import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/autor/[slug].ts
var _slug__exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var API_URL = "http://localhost:3000/api";
async function GET({ params, request }) {
	const { slug } = params;
	const authHeader = request.headers.get("Authorization");
	const headers = {
		"Content-Type": "application/json",
		...authHeader ? { Authorization: authHeader } : {}
	};
	const response = await fetch(`${API_URL}/autores/${encodeURIComponent(slug)}`, {
		method: "GET",
		headers
	});
	const body = await response.text();
	return new Response(body, {
		status: response.status,
		headers: { "Content-Type": "application/json" }
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/autor/[slug]@_@ts
var page = () => _slug__exports;
//#endregion
export { page };
