/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'www.planetadelibros.com.co',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'images.cdn2.buscalibre.com',
        port: '',
        pathname: '/**/*',
      }
    ],
  },
}

module.exports = nextConfig
