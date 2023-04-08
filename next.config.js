/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['source.unsplash.com', 'hackcbs.tech'],
  },
};

module.exports = nextConfig;
