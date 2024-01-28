const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // activate this when deploy to netlify:
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/(.*)',
        destination: '/',
      },
    ],
  })
}

module.exports = nextConfig

