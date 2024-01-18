/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'faysdalgona.netlify.app',
    //     port: '',
    //     pathname: '/app/images/**',
    //   }
    // ]
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)', // Allow any route
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: '*', // Allow any origin (you might want to restrict this in production)
  //         },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value: 'Origin, X-Requested-With, Content-Type, Accept',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // rewrites: async () => ({
  //   beforeFiles: [
  //     {
  //       source: '/(.*)',
  //       destination: '/',
  //     },
  //   ],
  // }),
  generateStaticParams: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
}

module.exports = nextConfig

