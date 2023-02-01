/* eslint-env node */
// const { parsed: myEnv } = require('dotenv').config({ path: './.env' });
// const webpack = require('webpack');

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  webpack: config => {
    // config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ['removeDimensions'],
  },
  strictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  env:{
    EMAIL_VAILD_API_URL: process.env.EMAIL_VAILD_API_URL,
    EMAIL_VAILD_API_KEY: process.env.EMAIL_VAILD_API_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  }
};

module.exports = nextConfig;
