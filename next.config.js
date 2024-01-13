/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
    // Add the remote patterns for your images
    loader: 'default',
    path: '/_next/image',
    disableStaticImages: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http', // or 'https' if applicable
      },
    ],
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig