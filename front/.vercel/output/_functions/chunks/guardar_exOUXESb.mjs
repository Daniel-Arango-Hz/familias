import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/guardar.ts
var guardar_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var API_URL = "http://localhost:3000/api";
async function fetchGuardadoState(libroSlug, token) {
	const verifyRes = await fetch(`${API_URL}/libros/${libroSlug}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			"User-Agent": "FamiliaLee-Frontend/1.0"
		}
	});
	if (!verifyRes.ok) throw new Error(`No se pudo verificar guardado (status ${verifyRes.status})`);
	const libro = await verifyRes.json();
	return Boolean(libro?.guardado);
}
async function POST({ request }) {
	try {
		const { libroSlug } = await request.json();
		if (!libroSlug) return new Response(JSON.stringify({ error: "libroSlug requerido" }), { status: 400 });
		const token = request.headers.get("Authorization")?.replace("Bearer ", "");
		if (!token) return new Response(JSON.stringify({
			error: "Requiere autenticación",
			requiresAuth: true
		}), { status: 401 });
		const headers = {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`,
			"User-Agent": "FamiliaLee-Frontend/1.0"
		};
		console.log(`[guardar] Calling backend: POST ${API_URL}/libros/${libroSlug}/guardar`);
		const response = await fetch(`${API_URL}/libros/${libroSlug}/guardar`, {
			method: "POST",
			headers
		});
		console.log(`[guardar] Backend response status:`, response.status);
		console.log(`[guardar] Response headers:`, response.headers.get("content-type"));
		if (response.status === 204 || response.status === 200) {
			const guardado = await fetchGuardadoState(libroSlug, token);
			return new Response(JSON.stringify({
				guardado,
				success: true
			}), { status: 200 });
		}
		if (response.status === 401) return new Response(JSON.stringify({
			error: "Token inválido",
			requiresAuth: true
		}), { status: 401 });
		const errorText = await response.text();
		console.log(`[guardar] Error response:`, errorText);
		return new Response(JSON.stringify({
			error: `Backend error: ${response.status}`,
			details: errorText
		}), { status: response.status });
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		console.error("[guardar] Unexpected error:", errorMessage);
		return new Response(JSON.stringify({
			error: "Error al guardar",
			details: errorMessage
		}), { status: 500 });
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/guardar@_@ts
var page = () => guardar_exports;
//#endregion
export { page };
