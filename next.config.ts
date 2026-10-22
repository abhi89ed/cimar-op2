import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to `out/` for Cloudflare Pages (no Node server). Export mode can't
  // run Cache Components / Partial Prerendering, so those stay off.
  output: "export",
  images: {
    // The default optimizer needs a server. Assets in public/images are already
    // cropped to ~2× display size and compressed, so they're served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
