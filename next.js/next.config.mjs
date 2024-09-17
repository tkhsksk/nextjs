/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(php)$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
