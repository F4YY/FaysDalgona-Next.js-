/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // rewrites: async () => ({
  //   beforeFiles: [
  //     {
  //       source: '/(.*)',
  //       destination: '/',
  //     },
  //   ],
  // }),
  // redirects: async () => [
  //   {
  //     source: '/about',
  //     destination: '/content/pages/about',
  //     permanent: true,
  //   },
  // ]
}

module.exports = nextConfig

