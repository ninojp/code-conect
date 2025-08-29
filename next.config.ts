import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['raw.githubusercontent.com']
  // }
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**'
      },
    ]
  }
};

export default nextConfig;
