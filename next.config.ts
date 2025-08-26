import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  swcMinify: false, // Adicionado para evitar possíveis bugs de build
  experimental: {
    allowedDevOrigins: [
      'https://3000-firebase-studio-1756196356966.cluster-hlmk212htragyudeyf6f3tzsi6.cloudworkstations.dev',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
