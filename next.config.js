const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // activate this when deploy to netlify, inactivate when deploy to vercel:
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

