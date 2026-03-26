import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingExcludes: {
    '*': ['./node_modules/sanity/**', './node_modules/@sanity/**'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'sanity/structure': false,
      'sanity': false,
    };
    return config;
  },
};

export default nextConfig;
