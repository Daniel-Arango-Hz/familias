import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/seguir.ts
var seguir_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var API_URL = "https://familias.vercel.app/api";
async function POST({ request }) {
	try {
		const { autorId } = await request.json();
		if (!autorId) return new Response(JSON.stringify({ error: "autorId requerido" }), { status: 400 });
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
		console.log(`[seguir] Calling backend: POST ${API_URL}/autores/${autorId}/seguir`);
		const response = await fetch(`${API_URL}/autores/${autorId}/seguir`, {
			method: "POST",
			headers
		});
		console.log(`[seguir] Backend response status:`, response.status);
		if (response.status === 204 || response.status === 200) {
			const responseText = await response.text();
			console.log(`[seguir] Response body:`, responseText);
			if (!responseText || responseText.trim() === "") {
				console.log("[seguir] Empty response treated as success");
				return new Response(JSON.stringify({
					siguiendo: true,
					success: true
				}), { status: 200 });
			}
			let data;
			try {
				data = JSON.parse(responseText);
			} catch (e) {
				console.error("[seguir] Failed to parse JSON:", responseText);
				return new Response(JSON.stringify({
					error: "Invalid JSON from backend",
					details: responseText
				}), { status: 500 });
			}
			const totalSeguidores = data.total_seguidores;
			return new Response(JSON.stringify({
				siguiendo: data.siguiendo !== false,
				total_seguidores: typeof totalSeguidores === "number" || typeof totalSeguidores === "string" ? Number(totalSeguidores) : void 0,
				success: true
			}), { status: 200 });
		}
		if (response.status === 401) return new Response(JSON.stringify({
			error: "Token inválido",
			requiresAuth: true
		}), { status: 401 });
		const errorText = await response.text();
		console.log(`[seguir] Error response:`, errorText);
		return new Response(JSON.stringify({
			error: `Backend error: ${response.status}`,
			details: errorText
		}), { status: response.status });
	} catch (error) {
		console.error("[seguir] Unexpected error:", error, error.message);
		return new Response(JSON.stringify({
			error: "Error al seguir",
			details: String(error)
		}), { status: 500 });
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/seguir@_@ts
var page = () => seguir_exports;
//#endregion
export { page };
