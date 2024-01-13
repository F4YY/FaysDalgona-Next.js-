/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}
  // images: {
  //   disableStaticImages: true,
  // },
  // images: {
  //   domains: [],
  //   // Add the remote patterns for your images
  //   loader: 'default',
  //   path: '/_next/image',
  //   disableStaticImages: true,
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   remotePatterns: [
  //     {
  //       hostname: 'localhost',
  //       protocol: 'http', // or 'https' if applicable
  //     },
  //   ],
  //   minimumCacheTTL: 60,
  // },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|svg)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             publicPath: '/_next/static/images',
//             outputPath: 'static/images',
//           },
//         },
//       ],
//     });

//     return config;
//   }
// }

module.exports = nextConfig