const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const nextEnv = require('next-env');

require('dotenv').config();

const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    nextEnv,
    withCSS,
    {
      staticPrefix: '',
      publicPrefix: '',
      images: {
        domains: ['s.gravatar.com'],
      },
    },
  ],
  nextConfig,
);
