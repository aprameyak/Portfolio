/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com',
      'upload.wikimedia.org',
      'cdn.jsdelivr.net'
    ],
  },
}

module.exports = nextConfig 