/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dbkpop.com','preview.redd.it'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dbkpop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.dbkpop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.preview.redd.it',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
