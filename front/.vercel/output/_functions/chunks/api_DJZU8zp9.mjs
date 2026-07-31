//#region src/utils/api.ts
var API_URL = "http://localhost:3000/api";
async function obtenerLibros(filters) {
	const params = new URLSearchParams();
	if (filters) Object.entries(filters).forEach(([key, value]) => {
		if (value === void 0 || value === null || value === "") return;
		if (key === "limite") {
			params.append("limit", String(value));
			return;
		}
		if (key === "pagina") {
			params.append("page", String(value));
			return;
		}
		params.append(key, String(value));
	});
	const res = await fetch(`${API_URL}/libros?${params}`);
	if (!res.ok) throw new Error("Error al obtener libros");
	return res.json();
}
async function obtenerAutores() {
	const res = await fetch(`${API_URL}/autores`);
	if (!res.ok) throw new Error("Error al obtener autores");
	return res.json();
}
//#endregion
export { obtenerLibros as n, obtenerAutores as t };
