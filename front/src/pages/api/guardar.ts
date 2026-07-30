const API_URL = 'http://localhost:3000/api';

// Guardar/Desguardar libro
export async function POST({ request }) {
  try {
    const { libroSlug } = await request.json();

    if (!libroSlug) {
      return new Response(JSON.stringify({ error: 'libroSlug requerido' }), { status: 400 });
    }

    // Obtener el token del header de la solicitud
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Requiere autenticación', requiresAuth: true }),
        { status: 401 }
      );
    }

    // Headers para enviar al backend
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'FamiliaLee-Frontend/1.0',
    };

    console.log(`[guardar] Calling backend: POST ${API_URL}/libros/${libroSlug}/guardar`);

    // Llamar al backend para guardar/desguardar
    const response = await fetch(`${API_URL}/libros/${libroSlug}/guardar`, {
      method: 'POST',
      headers,
      timeout: 10000
    });

    console.log(`[guardar] Backend response status:`, response.status);
    console.log(`[guardar] Response headers:`, response.headers.get('content-type'));

    if (response.status === 204 || response.status === 200) {
      // Try to parse JSON if there's content
      const responseText = await response.text();
      console.log(`[guardar] Response body length:`, responseText.length);
      console.log(`[guardar] Response body:`, responseText);

      if (!responseText || responseText.trim() === '') {
        // Empty response, assume success
        console.log('[guardar] Empty response treated as success');
        return new Response(
          JSON.stringify({ guardado: true, success: true }),
          { status: 200 }
        );
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('[guardar] Failed to parse JSON:', responseText);
        return new Response(
          JSON.stringify({ error: 'Invalid JSON from backend', details: responseText }),
          { status: 500 }
        );
      }

      return new Response(
        JSON.stringify({
          guardado: data.guardado !== false,
          success: true,
        }),
        { status: 200 }
      );
    }

    // Handle error responses
    if (response.status === 401) {
      return new Response(
        JSON.stringify({ error: 'Token inválido', requiresAuth: true }),
        { status: 401 }
      );
    }

    const errorText = await response.text();
    console.log(`[guardar] Error response:`, errorText);

    return new Response(
      JSON.stringify({ error: `Backend error: ${response.status}`, details: errorText }),
      { status: response.status }
    );
  } catch (error) {
    console.error('[guardar] Unexpected error:', error, error.message);
    return new Response(
      JSON.stringify({ error: 'Error al guardar', details: String(error) }),
      { status: 500 }
    );
  }
}
