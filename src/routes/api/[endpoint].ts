import type { EndpointOutput } from '@sveltejs/kit';
import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export const BASE_URL = 'http://192.168.12.1';

export async function get(request: ServerRequest): Promise<EndpointOutput> {
  const endpoint = `${BASE_URL}/${request.params.endpoint}`;
  const res = await fetch(endpoint);
  if (res.ok) {
    const data = await res.json();
    return {
      body: data,
    };
  } else {
    return {
      status: res.status,
      body: {
        error: res.statusText,
      },
    };
  }
}
