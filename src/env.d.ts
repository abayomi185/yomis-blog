/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ENV = {
  BLOB_STORE: R2Bucket;
};

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
