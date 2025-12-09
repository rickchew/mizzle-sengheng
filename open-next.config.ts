// open-next config: using provider 'none' because site is fully static
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

// No Cloudflare-specific overrides — site is static and doesn't use R2.
export default {
  incrementalCache: {
    provider: "memory"
  }
}