/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
    images: {
      domains: ["metalbackend.ryt-service.ir"],
    },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
};
