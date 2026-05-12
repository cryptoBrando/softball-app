import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/softball-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
