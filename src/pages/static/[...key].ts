import { logger } from '@/utils/logger';
import type { APIContext } from 'astro';
import { ALLOWED_ORIGINS } from 'infra';
import sharp from 'sharp';

export const prerender = false;

export async function GET({ locals, params, request }: APIContext) {
  const { BLOB_STORE } = locals.runtime.env;
  console.log('BLOB_STORE:', BLOB_STORE);

  // params.key will contain the full path after /static/
  // e.g., /static/assets/images/photo.jpg -> params.key = "assets/images/photo.jpg"
  // But if the URL is /static/static/assets/..., we need to strip the extra "static/"
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
    
    // Extract image dimensions for Astro's Image component
    if (contentType.startsWith('image/')) {
      try {
        const metadata = await sharp(Buffer.from(data)).metadata();
        if (metadata.width && metadata.height) {
          headers.set('x-image-width', metadata.width.toString());
          headers.set('x-image-height', metadata.height.toString());
        }
      } catch (error) {
        logger.warn({ key, error }, 'Failed to extract image metadata');
      }
    }

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
