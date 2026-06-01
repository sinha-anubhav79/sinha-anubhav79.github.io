/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
  
    return config;
  },
}

module.exports = nextConfig
