/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.staart.com", "content.staart.com"],
  },
};

module.exports = nextConfig;
