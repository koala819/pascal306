/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  nextConfig,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_APP_SECRET: process.env.PAYPAL_APP_SECRET
  }
};
