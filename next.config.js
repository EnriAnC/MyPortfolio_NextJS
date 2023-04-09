/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Home/Home',
      },
      {
        source: '/projects',
        destination: '/Projects/Projects',
      },
      {
        source: '/about',
        destination: '/About/About',
      },
    ]
  },}
