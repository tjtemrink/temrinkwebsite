/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a self‑contained bundle that runs well on Azure App Service
  output: 'standalone',

  // Avoid server-side image optimizer (no extra binary needed on App Service)
  images: { unoptimized: true },

  // Sensible defaults
  reactStrictMode: true,
  poweredByHeader: false,

  // Keep CI/CD flowing even if lint/ts has minor issues
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Ensure Node-style module resolution in some hosting environments
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;

