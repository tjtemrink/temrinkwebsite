/** @type {import('next').NextConfig} */
const nextConfig = {
  // Make the runtime bundle self-contained (good for servers like Azure App Service)
  output: 'standalone',

  // Avoid Next/Image optimization server-side requirements on App Service
  images: { unoptimized: true },

  reactStrictMode: true,
};

module.exports = nextConfig;
