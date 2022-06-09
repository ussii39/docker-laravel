/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // 追記
  experimental: {
    outputStandalone: true,
  },
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 800,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },
  // webpack: (config, { dev }) => {
  //   if (dev) {
  //     config.watchOptions = {
  //       poll: 1000,
  //       aggregateTimeout: 200,
  //     };
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
