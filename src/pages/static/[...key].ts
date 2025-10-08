import { ALLOWED_ORIGINS } from '@/constants';
import { logger } from '@/utils/logger';
import type { APIContext } from 'astro';

export const prerender = false;

export async function GET({ locals, params, request }: APIContext) {
  const { BLOB_STORE } = locals.runtime.env;
  console.log('BLOB_STORE:', BLOB_STORE);

  let key = params.key;

  if (!key) {
    return new Response('Missing key', { status: 400 });
  }

  key = key.replace(/^static\//, '');

  let response: Response;

  // const cache = caches.default;
  // let response = await cache.match(request);

  // if (response) {
  //   // Return cached response
  //   return response;
  // }

  try {
    const object = await BLOB_STORE.get(key);

    if (!object) {
      return new Response('Not found', { status: 404 });
    }

    const contentType = object.httpMetadata?.contentType ?? 'application/octet-stream';
    const data = await object.arrayBuffer();

    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('etag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    const requestOrigin = request.headers.get('Origin');
    if (requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)) {
      headers.set('Access-Control-Allow-Origin', requestOrigin);
    }

    headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    response = new Response(data, {
      headers,
      status: 200
    });

    // Cache the response
    // await cache.put(request, response.clone());

    return response;
  } catch (error) {
    logger.error(
      {
        error:
          error instanceof Error ? { message: error.message, name: error.name } : String(error),
        key
      },
      'Error fetching from R2'
    );
    return new Response('Internal server error', { status: 500 });
  }
}
