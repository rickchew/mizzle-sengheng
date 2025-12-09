// Minimal open-next config: site is static and does not use R2.
// OpenNext Cloudflare expects at least a `default` object in the config.
// Minimal config object for OpenNext Cloudflare build.
// We export a plain object with a `default` key to satisfy the CLI's validation.
// Cast to `any` so TypeScript type checks from the helper library don't block the build.
const config = {
  default: {
    override: {
      wrapper: 'cloudflare-node',
      converter: 'edge',
      proxyExternalRequest: 'fetch',
      incrementalCache: 'dummy',
      tagCache: 'dummy',
      queue: 'dummy',
    },
  },
  edgeExternals: ['node:crypto'],
  middleware: {
    external: true,
    override: {
      wrapper: 'cloudflare-edge',
      converter: 'edge',
      proxyExternalRequest: 'fetch',
      incrementalCache: 'dummy',
      tagCache: 'dummy',
      queue: 'dummy',
    },
  },
} as any

export default config