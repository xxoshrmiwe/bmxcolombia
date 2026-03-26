import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 
        'sanity', 
        '@sanity/vision',
        'next-sanity',
        '@sanity/client',
        '@sanity/image-url'
      ];
    }
    return config;
  },
};

export default nextConfig;
