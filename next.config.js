/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/tazyky-827f8.appspot.com/**',
      },
    ],
  },
}

module.exports = nextConfig
