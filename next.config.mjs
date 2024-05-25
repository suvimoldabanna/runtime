const nextConfig = {
    experimental: {
      runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'test.mixnung999.com',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;