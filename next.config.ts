import type { NextConfig } from "next";

export const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    return config; // babel-loader 제거
  },
  experimental: {},
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.(js|ts|jsx|tsx)$/,
  //     loader: "babel-loader",
  //     exclude: /node_modules/,
  //   });
  //   return config;
  // },
};

export default nextConfig;
