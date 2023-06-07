/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {serverActions: true},
  env: {
    ...require(`./src/config/${process.env.APP_ENV || 'local'}.json`),
    NEXT_PUBLIC_BUILD_ID: process.env.BUILD_ID,
  },
  compiler: {
    reactRemoveProperties: process.env.APP_ENV === 'production',
  },
  productionBrowserSourceMaps: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

console.log('APP_ENV:', process.env.APP_ENV || 'local');
